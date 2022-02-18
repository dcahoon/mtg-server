const decksCardsService = require("./decks_cards.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

function deckCardExists(req, res, next) {
    const { deckId, cardId } = req.params
    decksCardsService
        .read(deckId, cardId)
        .then((deckCard) => {
            if (deckCard) {
                res.locals.deckCard = deckCard
                console.log(res.locals.deckCard)
                return next()
            }
            next({ status: 404, message: `Deck ${deckId} Card ${cardId} not found.` })
        })
        .catch(next)
}

async function create(req, res, next) {
    const newDeckCard = await decksCardsService.create(req.body.data)
    res.status(201).json({
        data: newDeckCard
    })
    .catch(next)
}

function read(req, res, next) {
    res.json({ data: res.locals.deckCard })
}

function update(req, res, next) {
    const updatedDeckCard = {
        ...req.body.data,
        deck_id: req.params.deckId,
        multiverseid: req.params.cardId,
    }
    decksCardsService
        .update(updatedDeckCard)
        .then((data) => res.json({ data }))
        .catch(next)
}

function destroy(req, res, next) {
    const { deckId, cardId } = req.params
    decksCardsService
        .destroy(deckId, cardId)
        .then(() => res.sendStatus(204))
        .catch(next)
}

function list(req, res, next) {
    decksCardsService
        .list(req.params.deckId)
        .then((data) => res.json({ data }))
        .catch(next)
}

function allDecksCards(req, res, next) {
    decksCardsService
        .allDecksCards()
        .then((data) => res.json({ data }))
        .catch(next)
}

module.exports = {
    create,
    read: [deckCardExists, read],
    update: [deckCardExists, update],
    destroy: [deckCardExists, destroy],
    list,
    allDecksCards,
}



/* 
https://knexjs.org/
https://expressjs.com/
https://nodejs.org/en/docs/

https://www.youtube.com/watch?v=ldYcgPKEZC8

https://flaviocopes.com/tags/express/

https://12factor.net/

https://apisyouwonthate.com/

 */