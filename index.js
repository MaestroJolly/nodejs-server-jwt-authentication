"use strict";

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 3333;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

app.get('/', (req, res)=>{
    res.json({
        Greetings: 'Welcome to this API'
    });
});

app.listen(PORT, ()=>{
    console.log(`App is listening is PORT ${PORT}`);
});