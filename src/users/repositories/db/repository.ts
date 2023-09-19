import { User } from "users/models/user";
import { IUserRepository } from "../IRepository";
import { ClientError } from "../../../core/exceptions/clientError";
import { nextUserId, users } from "../../../utils/mockUser";

export class UserRepositoryDb implements IUserRepository {
    public async getByUsername(username: string): Promise<User> {
        const existingUser = Object.values(users).find(user => user.username === username);
        if (!existingUser) {
            return Promise.resolve(null);
        }
        return (this.generatSafeCopy(existingUser));
    }
    public async update(user: User): Promise<void> {
        return;
    }
    public async create(user: User): Promise<User> {
        const { username, password, role } = user;
        const exists = await this.getByUsername(username);
        const id: number = nextUserId + 1;
        if (!exists) {
            const user = {
                username,
                password,
                role,
                id
            }
            const listUsers = {
                ...users,
                username,
                password,
                role,
                id
            }
            return user;
        }
        return Promise.resolve(null);
    }
    
    public async get(id: string): Promise<User> {
        const users = await this.find();
        if (!(id in users)) {
            throw new ClientError(`User with ID ${id} not found`, 404);
        }
        
        const user = users.find(u => u.id == id);

        return (this.generatSafeCopy(user));
    }
    public async find(): Promise<User[]> {
        return Object.values(users).map(user => this.generatSafeCopy(user));
    }

    private generatSafeCopy(user: User): User {
        const _user = { ...user };
        delete _user.password;
        return _user;
    }

}