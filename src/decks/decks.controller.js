const decksService = require("./decks.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

function deckExists(req, res, next) {
    decksService
        .read(req.params.deckId)
        .then((deck) => {
            if (deck) {
                res.locals.deck = deck
                return next()
            }
            next({ status: 404, message: `Deck not found id: ${req.params.deckId}`})
        })
        .catch(next)
}

function list(req, res, next) {
    decksService
        .list(req.params.userId)
        .then((data) => res.json({ data }))
        .catch(next)
}

function read(req, res, next) {
    res.json({ data: res.locals.deck })
}

/* function create(req, res, next) {
    
} */

module.exports = {
    list: [asyncErrorBoundary(list)],
    read: [asyncErrorBoundary(deckExists), asyncErrorBoundary(read)]
}