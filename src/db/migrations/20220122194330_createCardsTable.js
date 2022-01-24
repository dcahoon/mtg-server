
exports.up = async function(knex) {
    
    return knex.schema.createTable("cards", (table) => {
        table.string("multiverseid").primary()
        table.string("name")
        table.string("artist")
        table.specificType("colors", 'text ARRAY')
        table.specificType("color_identity", 'text ARRAY')
        table.integer("cmc")
        table.string("id")
        table.string("image_url")
        table.specificType("legalities", 'text ARRAY')
        table.string("mana_cost")
        table.integer("number")
        table.text("original_text")
        table.string("original_type")
        table.integer("power")
        table.integer("toughness")
        table.specificType("printings", 'text ARRAY')
        table.string("rarity")
        table.specificType("rulings", 'text ARRAY')
        table.string("set")
        table.string("set_name")
        table.specificType("subtypes", 'text ARRAY')
        table.text("text")
        table.string("type")
        table.specificType("types", 'text ARRAY')
        table.timestamps(true, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("cards")
};

//color_identity, colors, legalities, printings, types, rulings, subtypes

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