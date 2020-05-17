import express, { NextFunction } from 'express';
import  { UsersController } from '../users/users.controller';
import { UsersRegisterValidator } from '../users/users.register.validator';

const router = express.Router();

const usersController = new UsersController;
const usersRegisterValidator = new UsersRegisterValidator;




router.post('/register', usersRegisterValidator.checkParams('firstName', 'lastName', 'otherName', 'email', 'phonenumber', 'age', 'sex', 'country', 'password', 'confirmPassword', 'isAdmin'), usersRegisterValidator.validateError, usersController.register);

router.get('/profile', usersController.profile);


export default router;