import { NextFunction, Request, Response } from "express";
import { Roles } from "../../users/models/user";
import { CustomRequest } from "./checkJwt";
import { userRepository } from "../../users/repositories/IRepository";

export const checkRole = (roles: Roles[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const user = await userRepository.get((req as CustomRequest).token.paylaod.userId);

        if (!user) {
            res.status(404).type('json').send(JSON.stringify({ message: 'User not found' }));
            return;
        }

        if (roles.indexOf(user.role) > -1) {
            next();
        }

        res.status(403).type('json').send(JSON.stringify({ message: 'Not enough permissions' }));
        return;
    }
}