import express from 'express';
import cors from 'cors';

import { Config } from '../../configs/config';
import usersRoute from '../users/routes/index';

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
})

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));


app.use(Config.api, usersRoute());


app.listen(Config.port, () => {
    console.log('Server running...');
});