import { ClientError } from "../exceptions/clientError";
import { NextFunction, Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { userRepository } from "../../users/repositories/IRepository";
import { config } from "../../../configs/config";

class AuthController {
    public async login(req: Request, res: Response, next: NextFunction): Promise<Response> {
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
            algorithm: 'HS256',
            audience: config.jwt.audience,
            issuer: config.jwt.issuer
        });

        return res.send({ token: token });
    };
}
export const authController:AuthController = new AuthController();