module.exports = [
    {
        deck_id: 1,
        deck_name: "Forbidden Illness",
        user_id: 1,
    },
    {
        deck_id: 2,
        deck_name: "Red Deck Wins",
        user_id: 1,
    },
]

/* table.increments("deck_id").primary()
table.string("deck_name")
table.integer("user_id").unsigned().notNullable()
table
  .foreign("user_id")
  .references("user_id")
  .inTable("users")
  .onDelete("cascade")
table.timestamps(true, true) */