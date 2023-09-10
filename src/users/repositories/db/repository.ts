import { IUserRepository } from "../IRepository";

export class UserRepositoryDb implements IUserRepository {
    public async find(): Promise<string> {
        const msg = await `inside of user repo db`;
        return msg;
    }

}