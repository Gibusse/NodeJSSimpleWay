import { UserRepositoryDb } from '../repositories/db/repository'

export interface IUserRepository {
    find(): Promise<string>
}
export const userRepository: IUserRepository = new UserRepositoryDb();
