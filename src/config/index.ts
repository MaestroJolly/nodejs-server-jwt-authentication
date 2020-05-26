require('dotenv').config();

type AppConfig = {
    [key: string]: any
}

export const appConfig: AppConfig = {
    "jwtsecretkey": process.env.JWT_SECRET_KEY
}