import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import eventsRouter from './routes/events';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hevents backend is running 🚀');
  });

app.use('/events', eventsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
