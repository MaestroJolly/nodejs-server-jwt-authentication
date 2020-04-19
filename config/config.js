"use strict";

require('dotenv').config();

module.exports = {
    "development": {
      "username": "",
      "password": null,
      "database": "nodeauthapp",
      "host": "127.0.0.1",
      "port": 5432,
      "dialect": "postgres",
      // "operatorsAliases": false
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "port": 5432,
      "dialect": "postgres",
      // "operatorsAliases": false
    },
    "production": {
      "username": process.env.PROD_DB_USERNAME,
      "password": process.env.PROD_DB_PASSWORD,
      "database": process.env.PROD_DB_NAME,
      "host": process.env.PROD_DB_HOSTNAME,
      "port": process.env.PROD_DB_PORT,
      "dialect": "postgres",
      // "operatorsAliases": false
    }
}

