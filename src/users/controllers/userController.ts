import express from 'express';

export const findUsers = (req: express.Request, res: express.Response) => {
    return res.send('Controller find users...');
};

