import express from 'express';
import usersRoute from '../users/routes/index';

const app = express();


app.use('/api', usersRoute());

app.listen('4000', () => {
    console.log('Server running...');
});