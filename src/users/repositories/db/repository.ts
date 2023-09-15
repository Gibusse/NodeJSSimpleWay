import { User } from "users/models/user";
import { IUserRepository } from "../IRepository";

export class UserRepositoryDb implements IUserRepository {
    public async update(user: User): Promise<void> {
        return;
    }
    public async create(user: User): Promise<any> {
        return await user;
    }
    get(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public async find(): Promise<string> {
        const msg = await `inside of user repo db`;
        return msg;
    }

}