import express from 'express';
import crypto from 'crypto';

export class JwtMiddleware {
    public async createJwt() {

    }

    public async checkJwt(password: string, next: express.NextFunction) {
        const passwordFields = password.split('$');
        const salt = passwordFields[0];
        const hash = crypto.createHmac('sha512', salt)
                            .update(password)
                            .digest('base64');
        if (hash === passwordFields[1]) {
            return next()
        }
    }
}
export const jwtMiddleware: JwtMiddleware = new JwtMiddleware();