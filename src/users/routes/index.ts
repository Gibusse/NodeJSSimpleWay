import express from 'express';
const router = express.Router();

import userRouters from './route';


export default (): express.Router => {
    userRouters(router);
   return router;
}