
exports.up = function(knex) {
  return knex.schema.createTable("decks", (table) => {
      table.increments("deck_id").primary()
      table.string("user_id")
      table.string("deck_name")
      table.text("deck_cards")
      table.timestamps(true, true) // Adds created_at and updated_at timestamps
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("decks")
};
