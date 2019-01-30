require("dotenv").config();

var config = {
  "development": {
    "username": process.env.user,
    "password": process.env.password,
    "database": process.env.database,
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "testdb",
    "host": "localhost",
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}

module.export = config;