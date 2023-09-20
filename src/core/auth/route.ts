import { asyncHandler } from '../../core/middlewares/asyncHandler';
import express from 'express';
import { authController } from './authController';

export default (router: express.Router) => {
    router.post('/login', asyncHandler(authController.login));
}