import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import { config } from "../../../configs/config";

export interface CustomRequest extends Request {
    token: JwtPayload;
}

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    const token = <string>req.headers['authorization'];

    try {
        const jwtPayload = verify(token?.split(' ')[1], config.jwt.secret, {
            complete: true,
            audience: config.jwt.audience,
            issuer: config.jwt.issuer,
            algorithms: ['HS256'],
            clockTimestamp: 0,
            ignoreExpiration: false,
            ignoreNotBefore: false
        });

        (req as CustomRequest).token = jwtPayload;
    } catch (error) {
        res.status(401).type(`json`).send(JSON.stringify({ message: 'Missing or invalid token '}));
        return;
    }

    next();
}