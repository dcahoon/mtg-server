
exports.up = async function(knex) {
    
    await knex.schema.createTable("cards", (table) => {
        table.string("multiverseid").primary()
        table.string("name")
        table.string("artist")
        table.integer("cmc")
        table.string("id")
        table.string("image_url")
        table.string("legalities")
        table.string("mana_cost")
        table.integer("number")
        table.text("original_text")
        table.string("original_type")
        table.integer("power")
        table.integer("toughness")
        table.text("printings")
        table.string("rarity")
        table.text("rulings")
        table.string("set")
        table.string("set_name")
        table.string("subtypes")
        table.text("text")
        table.string("type")
        table.string("types")
        table.timestamps(true, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("cards")
};

/* 
    name
    artist
    cmc
    foreignNames
    id
    imageUrl
    layout
    legalities
    manaCost
    multiverseId
    number
    originalText
    originalType
    power
    printings
    rarity
    rulings
    set
    setName
    subtypes
    text
    toughness
    type
    types 
*/

/* GET /foo {a:1}

POST /bar BODY: {x:1}

{x:2}

express.jkson()

/foo/5 */