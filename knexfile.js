const path = require("path")
require("dotenv").config()
const { DATABASE_URL } = process.env

module.exports = {
  development: {
    client: 'postgresql',
    connection: "https://safe-fortress-24111.herokuapp.com",
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};

// https://safe-fortress-24111.herokuapp.com/

// https://git.heroku.com/safe-fortress-24111.git

//postgres://gwpjyyab:TCP1gy3GK_BxT-Lf7_rCEbdchXlUuYbb@ziggy.db.elephantsql.com/gwpjyyab
