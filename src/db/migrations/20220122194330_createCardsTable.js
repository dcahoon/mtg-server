
exports.up = async function(knex) {
    
    await knex.schema.createTable("cards", (table) => {
        table.integer("multiverseid").primary()
        table.integer("deckid")


    })

    await knex.schema.createTable("decks_cards", (table) => {
        table.integer("multiverseid")
        table.foreign("multiverseid").references("cards.multiverseid")
        table.integer("deckid")
        table.foreign("deckid").references("decks.deckid")
        table.integer("quantity")
    })

};

exports.down = function(knex) {
  
};


/* GET /foo {a:1}

POST /bar BODY: {x:1}

{x:2}

express.jkson()

/foo/5 */