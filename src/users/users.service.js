const knex = require("../db/connection")

async function list() {
    return knex("users")
        .select("*")
}

async function create(newUser) {
    return knex("users")
        .insert(newUser)
        .returning("*")
        .then((createdUsers) => createdUsers[0])
}

module.exports = {
    list,
    create,
}