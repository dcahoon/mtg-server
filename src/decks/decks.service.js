const knex = require("../db/connection")

function create(deck) {
    return knex("decks")
        .insert(deck)
        .returning("*")
        .then((createdDecks) => createdDecks[0])
}

function list() {
    return knex("decks").select("*")
}

function read(deckId) {
    return knex("decks as d")
        .select("*")
        .where({ "d.deck_id": deckId })
        .first()
}

function destroy(deck_id) {
    return knex("decks").where({ deck_id }).del()
}

module.exports = {
    create,
    list,
    read,
    destroy,
}