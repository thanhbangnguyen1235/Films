import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Account from './router/Account.js';
import Comment from './router/Comment.js';
import Films from './router/Films.js';
import bodyParser from 'body-parser';

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(cors())

app.use('/', Account)
app.use('/', Comment)
app.use('/', Films)


const URI = process.env.DATABASE_URL;
mongoose.connect(URI, {  useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to DB')

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch(err => {
        console.log('error', err)
    })