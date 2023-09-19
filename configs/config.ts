import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
    port: process.env.PORT || 4000,
    api: process.env.API || '/api',
    jwt_expiration_in_seconds: 3000,
    environment: 'dev',
    permissionLevels: {
        NORMAL_USER: 1,
        PAID_USER: 4,
        ADMIN: 2048
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        audience: process.env.JWT_AUDIENCE,
        issuer: process.env.JWT_ISSUER
    },
}