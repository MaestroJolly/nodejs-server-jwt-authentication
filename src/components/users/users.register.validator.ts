import { check, validationResult, CustomValidator } from 'express-validator';
import { Request, Response, NextFunction } from 'express';


export class UsersRegisterValidator {

    constructor(){
        this.checkParams();
    }

    async validateError(req: Request, res: Response, next: NextFunction ): Promise<any>{

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }
        next();
    }

    checkParams(){
       return [
            check('firstName').isAlpha().withMessage('firstName should be a string'),
            check('lastName').isAlpha().withMessage('lastName should be a string'),
            check('otherName').isAlpha().withMessage('otherName should be a string'),
            check('email').isEmail().withMessage('email is invalid'),
            check('phonenumber').isInt().withMessage('phonenumber should be numeric').isLength({ min: 10 }).withMessage('must be at least 10 chars long'),
            check('age').isInt().withMessage('age should be a number'),
            check('sex').isAlpha().withMessage('sex should a string').isLength({ max: 1 }).withMessage('sex should not be greater than 1'),
            check('country').isAlpha().withMessage('country should a string').isLength({ max: 2 }).withMessage('country should not be greater than 2'),
            check('password').isLength({ min: 8 }).withMessage('must be at least 5 chars long').matches(/\d/).withMessage('must contain a number'),
            check('confirmPassword').isLength({ min: 8 }).withMessage('must be at least 5 chars long').matches(/\d/).withMessage('must contain a number'),
            check('isAdmin').isBoolean().withMessage('isAdmin should either be true or false')
        ]

    }
}


