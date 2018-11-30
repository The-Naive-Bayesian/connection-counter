import * as express from 'express';
import {Request, Response} from "express";

// Server setup
const port = 3000;
const app = express();

// Set initial call count to 0
let count = 0;

app.get('/', (req: Request, res: Response) => {
    count++;
    res.send({
        requestsCount: count
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
