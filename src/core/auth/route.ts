import { asyncHandler } from '../../core/middlewares/asyncHandler';
import express from 'express';
import { Auth } from './auth';

export default (router: express.Router) => {
    router.post('/login', asyncHandler(Auth.login));
}