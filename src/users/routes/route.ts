import express from 'express';

import { usersController } from '../controllers/userController';

export default (router: express.Router) => {
   router.get('/users', [usersController.find]);
   router.post('/users', [usersController.create]);
   router.put('/users', usersController.update);
}