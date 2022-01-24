module.exports = [
    {
        username: "CardyA",
        user_first_name: "Cardy",
        user_last_name: "A",
        user_address_line_1: "1234 5th St",
        user_city: "New York",
        user_state: "NY",
        user_zip: "00123",
        user_favorite_format: "Modern",
        user_notes: "Enjoys control decks and collecting foil cards.",
    },
    {
        username: "CardyB",
        user_first_name: "Cardy",
        user_last_name: "B",
        user_address_line_1: "4567 8th St",
        user_city: "Detroit",
        user_state: "MI",
        user_zip: "44444",
        user_favorite_format: "Standard",
        user_notes: "Collects planeswalkers and likes red cards.",
    },
    {
        username: "CardyC",
        user_first_name: "Cardy",
        user_last_name: "C",
        user_address_line_1: "345 6th St",
        user_address_line_2: "Apt 4b",
        user_city: "Chicago",
        user_state: "IL",
        user_zip: "14785",
        user_favorite_format: "Commander",
        user_notes: "Has 20 commander decks.",
    },
]

/* table.increments("user_id").primary()
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
table.timestamps(true, true) */