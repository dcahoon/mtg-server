
exports.up = function(knex) {
  return knex.schema.createTable("users", (table) => {
      table.increments("user_id").primary()
      table.string("username").notNullable()
      table.string("user_first_name")
      table.string("user_last_name")
      table.string("user_address_line_1")
      table.string("user_address_line_2")
      table.string("user_city")
      table.string("user_state")
      table.string("user_zip")
      table.string("user_favorite_format")
      table.text("user_notes")
      table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("users")
};
