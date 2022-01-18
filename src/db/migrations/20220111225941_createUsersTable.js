
exports.up = function(knex) {
  return knex.schema.createTable("users", (table) => {
      table.string("user_id").primary()
      table.string("username").notNullable()
      table.string("location")
      table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("users")
};
