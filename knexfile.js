const path = require("path")
require("dotenv").config()
const { DATABASE_URL } = process.env

module.exports = {
  development: {
    client: 'postgresql',
    connection: "postgres://gwpjyyab:TCP1gy3GK_BxT-Lf7_rCEbdchXlUuYbb@ziggy.db.elephantsql.com/gwpjyyab",
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
