import { Request, Response } from 'express';
import { usersService } from '../services/usersService';

class UsersController {
    public async find (req: Request, res: Response): Promise<void> {
        const response = await usersService.find();
        res.send(response);
    };

    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const { firstName, lastName, email, password, permissionLevel } = req.body;
        const response = await usersService.create({ firstName, lastName, email, password, permissionLevel })
        res.send(response);
    }

    public async get(req: Request, res: Response): Promise<void> {
        res.send('Hello');
    }

    public async update(req: Request, res: Response): Promise<void> {
        const response = await usersService.update(req.body);
        res.send(response);
    }
}

export const usersController: UsersController = new UsersController();

