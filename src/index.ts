"use strict";

require('dotenv').config();


import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import authRoutes from './components/auth';
import usersRoutes from './components/users';
import { Passport } from 'passport';
import sequelize from './models';

const passport = new Passport;

const app = express();
const PORT = process.env.PORT || 3333;


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/auth', authRoutes);

app.use('/users', usersRoutes);

app.use(passport.initialize());
app.use(passport.session());



app.get('/', (req, res)=>{
    res.json({
        Greetings: 'Welcome to this API'
    });
});

app.listen(PORT, ()=>{
    console.log(`App is listening is PORT ${PORT}`);
    sequelize.authenticate().then(async ()=>{
        console.log('Database Connection Successfully Established');
        try {
            await sequelize.sync({ force: true });
        } catch (error) {
            console.log(error.message);
        }
    }).catch((err: any) =>{
        console.log(err.message);
    })
});