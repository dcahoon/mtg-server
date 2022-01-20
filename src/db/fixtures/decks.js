module.exports = [
    {
        user_id: "1",
        deck_name: "Miracle Lapse",
        deck_cards: [
            {
                name: "Memory Lapse",
                cmc: 2,
                quantity: 4,
            },
            {
                name: "Brainstorm",
                cmc: 1,
                quantity: 4,
            },
            {
                name: "Entreat the Angels",
                cmc: 3,
                quantity: 4,
            },
            {
                name: "Temporal Mastery",
                cmc: 7,
                quantity: 4,
            },
            {
                name: "Isochron Scepter",
                cmc: 2,
                quantity: 4,
            },
            {
                name: "Azorius Charm",
                cmc: 2,
                quantity: 4,
            }
        ],
    },
    {
        user_id: "1",
        deck_name: "Forbidden Illness",
        deck_cards: "",
    }
]

/* 
    table.increments("deck_id").primary()
    table.string("deck_name")
    table.text("deck_cards")
    table.timestamps(true, true) 
*/