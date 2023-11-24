import express from 'express';
import userRouter from './router/userRouter.js'
import productRouter from './router/productRouter.js';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import cors from 'cors'


config({
    path: './data/config.env'
})

const app = express();



app.use(express.json());
app.use(cors());
app.use(cookieParser());



app.use(productRouter)
app.use(userRouter)

app.get('/', (req, res) => {
    res.send("Hi from /")

})

export default app; 