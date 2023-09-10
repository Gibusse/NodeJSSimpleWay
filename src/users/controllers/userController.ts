import express from 'express';
import { usersService } from '../services/usersService';

class UsersController {
    public async findUsers (req: express.Request, res: express.Response): Promise<void> {
        const response = await usersService.find();
        res.send(response);
    };
}

export const usersController: UsersController = new UsersController();

