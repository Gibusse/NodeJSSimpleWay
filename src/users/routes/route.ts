import express from 'express';

import { usersController } from '../controllers/userController';
import { asyncHandler } from '../../core/middlewares/asyncHandler';
import { checkJwt } from '../../core/middlewares/checkJwt';
import { checkRole } from '../../core/middlewares/checkRole';
import { Roles } from '../../users/models/user';

export default (router: express.Router) => {
   router.get('/users', [checkJwt, checkRole([Roles.ADMIN]), asyncHandler(usersController.find)]);
   router.get('/users/:id([0-9]{1,54})', [checkJwt, checkRole([Roles.ADMIN, Roles.USER]), asyncHandler(usersController.get)])
   router.post('/users', asyncHandler(usersController.create));
   router.put('/users/:id([0-9]{1,54})', [asyncHandler(usersController.update)]);
}