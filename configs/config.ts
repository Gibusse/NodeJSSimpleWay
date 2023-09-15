export const Config = {
    port: 4000,
    api: '/api',
    jwt_secret: 'myS33!!creeT',
    jwt_expiration_in_seconds: 3000,
    environment: 'dev',
    permissionLevels: {
        NORMAL_USER: 1,
        PAID_USER: 4,
        ADMIN: 2048
    }
}