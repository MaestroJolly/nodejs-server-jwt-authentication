'use strict';

import { AuthLoginDTO } from './auth.login.dto';

const models = require('../../../models');


class AuthService {

    async login(params: AuthLoginDTO) {
        return await models.User.findOne({raw:true, where:{
                email: params.email,
                password: params.password
            }});
    }

    register(){

    }

}

export default AuthService;