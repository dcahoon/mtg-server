module.exports = [
    {
        multiverseid: "79252",
        deck_id: 1,
        quantity: 4,
    },
    {
        multiverseid: "366354",
        deck_id: 1,
        quantity: 4,
    },
    {
        multiverseid: "376368",
        deck_id: 1,
        quantity: 4,
    },
    {
        multiverseid: "240178",
        deck_id: 1,
        quantity: 4,
    },
    {
        multiverseid: "158771",
        deck_id: 1,
        quantity: 4,
    },
]

/* table.string("multiverseid")
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
table.timestamps(true, true) */