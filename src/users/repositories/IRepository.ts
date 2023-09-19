import { User } from 'users/models/user';
import { UserRepositoryDb } from '../repositories/db/repository'

export interface IUserRepository {
    find(): Promise<User[]>;
    create(user: User): Promise<User>;
    get(id: string): Promise<User>;
    update(user: User): Promise<void>;
    getByUsername(username: string): Promise<User>;
}
export const userRepository: IUserRepository = new UserRepositoryDb();
