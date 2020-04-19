"use strict";

require('dotenv').config();


import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import authRoutes from './components/auth';

const app = express();
const PORT = process.env.PORT || 3333;


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/auth', authRoutes);

app.get('/', (req, res)=>{
    res.json({
        Greetings: 'Welcome to this API'
    });
});

app.listen(PORT, ()=>{
    console.log(`App is listening is PORT ${PORT}`);
});