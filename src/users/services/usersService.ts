import bcrypt from 'bcrypt';
import { User } from "users/models/user";
import { userRepository } from "../repositories/IRepository";
import { ClientError } from 'core/exceptions/clientError';

export class UsersService {
    public async find(): Promise<User[]> {
        const findUsers = await userRepository.find();
        return findUsers;
    }

    public async create(user: User): Promise<User> {
        const salt = bcrypt.genSaltSync(16);
        const passwordHash = bcrypt.hashSync(user.password, salt);
        const userCreated = await userRepository.create({...user, password: passwordHash});
        return userCreated;
    }

    public async update(user: User): Promise<any> {
        const { password } = user;
        const salt = bcrypt.genSaltSync(16);
        const passwordHash = bcrypt.hashSync(user.password, salt);

        const match = await bcrypt.compareSync(password, passwordHash);
        if (match) {
            return user.email;
        }
        throw new Error('inconnu...');
    }

    public async get(id: string): Promise<User> {
        const user = await userRepository.get(id);
        return user;
    }
}
export const usersService: UsersService = new UsersService();