import {  Queue, Worker} from 'bullmq';
import Redis from 'ioredis';
import express from 'express';
import { createBullBoard } from '@bull-board/api' ;
import  { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { ExpressAdapter } from '@bull-board/express';
var port = 3333;
const connection = new Redis();
const app = express();
const createQueueMQ = new Queue('test-q', { connection });
const createQueueMQ2 = new Queue('test-q2', { connection });


const run = async () => { 

}


const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/ui');
createBullBoard({
  queues: [new BullMQAdapter(createQueueMQ),new BullMQAdapter(createQueueMQ2)],
  serverAdapter,
});

app.use('/ui', serverAdapter.getRouter());
app.get("/", (req, res) => {
  res.send('app 3');
});
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
run().catch((e) => console.error(e));

