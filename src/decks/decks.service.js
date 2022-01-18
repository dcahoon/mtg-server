const knex = require("../db/connection")


function create(deck) {
    return knex("decks")
        .insert(deck)
        .returning("*")
        .then((createdDecks) => createdDecks[0])
}

function list(userId) {
    return knex("decks as d")
        .select("*")
        .where({ "d.user_id": userId })
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

function update(updatedDecks) {
    return knex("decks")
        .select("*")
        .where({ deck_id: updatedDecks.deck_id })
        .update(updatedDecks, "*")
        .then((updatedDecks) => updatedDecks[0])
}

module.exports = {
    create,
    list,
    read,
    destroy,
}