const knex = require("../db/connection")

async function create(newUser) {
    return knex("users")
        .insert(newUser)
        .returning("*")
        .then((createdUsers) => createdUsers[0])
}

function read(userId) {
    return knex("users")
        .select("*")
        .where({ user_id: userId })
        .first()
}

function update(updatedUser) {
    return knex("users")
        .select("*")
        .where({ user_id: updatedUser.user_id })
        .update(updatedUser, "*")
        .then((updatedUsers) => updatedUsers[0])
}

function destroy(userId) {
    return knex("users")
        .del()
        .where({ user_id: userId })
}

async function list() {
    return knex("users")
        .select("*")
}

module.exports = {
    create,
    read,
    update,
    destroy,
    list,
}