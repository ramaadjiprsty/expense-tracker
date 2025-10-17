import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import transactionRoutes from './routes/transactionRoutes'

dotenv.config();
connectDB();

const app = express();

const PORT: string | number = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('API Pelacak pengeluaran berjalan')
});

app.use('/api/v1/transactions', transactionRoutes);

app.listen(PORT, () => {
    console.log('Server berjalan di http://localhost:' + PORT);
});