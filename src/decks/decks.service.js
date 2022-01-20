const knex = require("../db/connection")

function create(newDeck) {
    return knex("decks")
        .insert(newDeck)
        .returning("*")
        .then((createdDecks) => createdDecks[0])
}

function list(userId) {
    return knex("decks as d")
        .select("*")
        .where({ "d.user_id": userId })
}

function allDecks() {
    return knex("decks")
        .select("*")
}

function read(userId, deckId) {
    return knex("decks as d")
        .select("*")
        .where({ "d.user_id": userId, "d.deck_id": deckId })
        .first()
}

function update(updatedDeck) {
    return knex("decks")
        .select("*")
        .where({ deck_id: updatedDeck.deck_id })
        .update(updatedDeck, "*")
        .then((updatedDeck) => updatedDeck[0])
}

function destroy(deck_id) {
    return knex("decks")
        .where({ "deck_id": deck_id })
        .del()
}

module.exports = {
    create,
    list,
    read,
    destroy,
    update,
    allDecks,
}

/* 
{
    "data": {
        "deck_id": 3,
        "deck_name": "Updated Deck Name",
        "user_id": "0002",
        "deck_cards": "{}",
        "created_at": "2022-01-18T22:47:58.315Z",
        "updated_at": "2022-01-18T22:47:58.315Z"
    }
}
 */