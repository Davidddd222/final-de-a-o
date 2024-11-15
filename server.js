import pkg from 'colors';
const {colors} = pkg;
import express from 'express';
import dotenv from 'dotenv';
import pruebaRouter from
       './routes/pruebaRoutes.js';
import authRouter from 
       './routes/authRouter.js';
import connectDB  from 
       './config/db.js';

dotenv.config()

connectDB();

const app = express();

app.use(express.json());

const PORT = process.
             env.
             PORT

app.use('/api/pruebas', pruebaRouter);

app.use('/api/auth', authRouter);


app.listen(PORT, () => {
    console.log(`Servidor ejecutandose: ${PORT}` .cyan.green.bold);
});