import express from 'express';

import { findUsers } from '../controllers/userController';

export default (router: express.Router) => {
   router.get('/users', findUsers);
}