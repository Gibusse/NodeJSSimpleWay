import { ClientError } from "../../core/exceptions/clientError";
import { NextFunction, Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { userRepository } from "../../users/repositories/IRepository";
import { config } from "../../../configs/config";

export class Auth {
    static login = async (req: Request, res: Response, next: NextFunction) => {
        const { username, password } = req.body;
        if (!(username && password)) {
            throw new ClientError('Username and password are required', 400);
        }

        const user = await userRepository.getByUsername(username);

        if (!user) {
            throw new ClientError('Username and password don\'t match', 401);
        }

        const token = sign({ userId: user.id, username: user.username, role: user.role }, config.jwt.secret, {
            expiresIn: '1h',
            notBefore: '0',
            algorithm: 'RS256',
            audience: config.jwt.audience,
            issuer: config.jwt.issuer
        });

        res.type('json').send({ token: token });
    };
}