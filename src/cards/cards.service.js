const knex = require("../db/connection")

function list() {
    return knex("cards")
        .select("*")
}

function read(multiverseid) {
    return knex("cards")
        .select("*")
        .where({ "multiverseid": multiverseid })
        .first()
}

function create(newCard) {
    return knex("cards")
        .insert(newCard)
        .returning("*")
        .then((createdCards) => createdCards[0])
}

module.exports = {
    list,
    read,
    create,
}
