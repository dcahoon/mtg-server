
exports.up = function(knex) {
    return knex.schema.createTable("decks", (table) => {
        table.increments("deck_id").primary()
        table.string("deck_name")
        table.integer("user_id").unsigned().notNullable()
        table
          .foreign("user_id")
          .references("user_id")
          .inTable("users")
          .onDelete("cascade")
        table.timestamps(true, true) // Adds created_at and updated_at timestamps
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("decks")
  };