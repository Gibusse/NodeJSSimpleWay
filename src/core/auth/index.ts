import express from 'express';
const router = express.Router();

import auth from './route';


export default (): express.Router => {
    auth(router);
   return router;
}