import express from 'express';

import { usersController } from '../controllers/userController';

export default (router: express.Router) => {
   router.get('/users', usersController.findUsers);
}