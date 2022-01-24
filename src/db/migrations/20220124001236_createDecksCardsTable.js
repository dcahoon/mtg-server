
exports.up = function(knex) {
    await knex.schema.createTable("decks_cards", (table) => {
        table.string("multiverseid")
        table
            .foreign("multiverseid")
            .references("multiverseid")
            .inTable("cards")
            .onDelete("cascade")
        table.integer("deck_id")
        table
            .foreign("deck_id")
            .references("deck_id")
            .inTable("decks")
            .onDelete("cascade")
        table.integer("quantity")
        table.timestamps(true, true)
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable("decks_cards")
};
