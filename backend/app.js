import express from 'express';
import userRouter from './router/userRouter.js'
import productRouter from './router/productRouter.js';
import marchandiseRouter from './router/marchanRouter.js'
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import cors from 'cors'


config({
    path: './data/config.env'
})

const app = express();

app.use(express.json());

app.use(cors({
    origin: 'https://shoes-safari.vercel.app/', // replace with the origin of your frontend
    credentials: true,
}));


app.use(cookieParser());

app.use(productRouter)
app.use(userRouter)
app.use(marchandiseRouter)

app.get('/', (req, res) => {
    res.send("Hi from piyu /")

})

export default app;

