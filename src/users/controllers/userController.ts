import { Request, Response } from 'express';
import { usersService } from '../services/usersService';
import { User } from '../models/user';

class UsersController {
    public async find (req: Request, res: Response): Promise<void> {
        const response = await usersService.find();
        res.status(200).type('json').send(response);
    };

    public async create(req: Request, res: Response): Promise<void> {
        const { username, email, password, role } = req.body;
        const response = await usersService.create({ username, email, password, role })
        res.status(201).type('json').send(response);
    }

    public async get(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const user = await usersService.get(id);
        return res.status(200).type('json').send(user);
    }

    public async update(req: Request, res: Response): Promise<void> {
        const response = await usersService.update(req.body);
        res.send(response);
    }
}

export const usersController: UsersController = new UsersController();

