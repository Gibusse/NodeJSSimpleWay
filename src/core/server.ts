import express from 'express';
import cors from 'cors';

import { config } from '../../configs/config';
import usersRoute from '../users/routes/index';
import { errorHandler } from './middlewares/errorHandler';
import auth from './auth';

const app = express();

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, HEAD, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    return next();
});

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));


app.use(config.api, [auth(), usersRoute()]);


app.use(errorHandler);


app.listen(config.port, () => {
    console.log('Server running...');
});