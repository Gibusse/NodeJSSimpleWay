import { userRepository } from "../repositories/IRepository";

export class UsersService {
    public async find(): Promise<any> {
        const findUsers = await userRepository.find();
        return findUsers;
    }
}
export const usersService: UsersService = new UsersService();