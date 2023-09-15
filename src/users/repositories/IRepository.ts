import { User } from 'users/models/user';
import { UserRepositoryDb } from '../repositories/db/repository'

export interface IUserRepository {
    find(): Promise<string>;
    create(user: User): Promise<any>;
    get(): Promise<void>;
    update(user: User): Promise<void>;
}
export const userRepository: IUserRepository = new UserRepositoryDb();
