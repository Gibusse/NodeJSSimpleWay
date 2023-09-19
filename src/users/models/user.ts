export interface User {
    id?: string | number;
    username: string;
    email?: string;
    password: string;
    permissionLevel?: number;
    role: Roles;
}

export interface IIndividual {
    id?: number;
    firstName: string;
    lastName: string;
}

export enum Roles {
    ADMIN ='ADMIN',
    USER = 'USER'
}