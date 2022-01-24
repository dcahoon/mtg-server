const decks_cards = require("../fixtures/decks_cards")

exports.seed = function(knex) {
	return knex
		.raw("TRUNCATE TABLE decks_cards RESTART IDENTITY CASCADE")
		.then(function () {
			return knex("decks_cards").insert(decks_cards)
		})
};
