import { check, body, validationResult, CustomValidator } from 'express-validator';
import { Request, Response, NextFunction } from 'express';


export class UsersRegisterValidator {

    constructor(){

    }

    async validateError(req: Request, res: Response, next: NextFunction ): Promise<any>{

        if (req.body.password) {
            await body('confirmPassword')
              .equals(req.body.password).withMessage('passwords do not match')
              .run(req);
          }

          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
          }

        next();
    }

    checkParams(firstName: string, lastName: string, otherName: string, email: string, phonenumber: string, age: string, sex: string, country: string, password: string, confirmPassword: string, isAdmin: string){
        return [
            body(firstName).isAlpha().withMessage('firstName should be a string'),
            body(lastName).isAlpha().withMessage('lastName should be a string'),
            body(otherName).isAlpha().withMessage('otherName should be a string'),
            body(email).isEmail().withMessage('email is invalid'),
            body(phonenumber).isInt().withMessage('phonenumber should be numeric').isLength({ min: 10 }).withMessage('must be at least 10 chars long'),
            body(age).isInt().withMessage('age should be a number'),
            body(sex).isAlpha().withMessage('sex should a string').isLength({ max: 1 }).withMessage('sex should not be greater than 1'),
            body(country).isAlpha().withMessage('country should a string').isLength({ max: 2 }).withMessage('country should not be greater than 2'),
            body(password).isLength({ min: 8 }).withMessage('must be at least 5 chars long').matches(/\d/).withMessage('must contain a number'),
            body(confirmPassword).isLength({ min: 8 }).withMessage('must be at least 5 chars long').matches(/\d/).withMessage('must contain a number'),
            body(isAdmin).isBoolean().withMessage('isAdmin should either be true or false')
        ]
    }
}


