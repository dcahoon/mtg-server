const knex = require("../db/connection")

function create(newDeckCard) {
    return knex("decks_cards")
        .insert(newDeckCard)
        .returning("*")
        .then((createdDeckCards) => createdDeckCards[0])
}

function read(deckId, cardId) {
    return knex("decks_cards")
        .select("*")
        .where({ deck_id: deckId, multiverseid: cardId })
        .first()
}

function update(updatedDeckCard) {
    return knex("decks_cards")
        .select("*")
        .where({ deck_id: updatedDeckCard.deck_id, multiverseid: updatedDeckCard.multiverseid })
        .update(updatedDeckCard, "*")
        .then((updatedDeckCards) => updatedDeckCards[0])
}

function destroy(deckId, cardId) {
    return knex
        .from("decks_cards")
        .where({ deck_id: deckId, multiverseid: cardId })
        .delete()
}

function list(deckId) {
    return knex("decks_cards")
        .select("*")
        .where({ "deck_id": deckId })
}

function allDecksCards() {
    return knex("decks_cards")
        .select("*")
}

module.exports = {
    create,
    read,
    update,
    destroy,
    list,
    allDecksCards,
}