const decksService = require("./decks.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

function deckExists(req, res, next) {
    decksService
        .read(req.params.userId, req.params.deckId)
        .then((deck) => {
            if (deck) {
                res.locals.deck = deck
                return next()
            }
            next({ status: 404, message: `Deck not found id: ${req.params.deckId}`})
        })
        .catch(next)
}

async function create(req, res, next) {
    const newDeck = await decksService.create(req.body.data)
    res.status(201).json({
        data: newDeck,
    })
}

function read(req, res, next) {
    res.json({ data: res.locals.deck })
}

async function update(req, res, next) {
    const updatedDeck = {
        deck_id: req.params.deckId,
        ...req.body.data
    }
    decksService
        .update(updatedDeck)
        .then((data) => res.json({ data }))
        .catch(next)
}

function destroy(req, res, next) {
    decksService
        .destroy(req.params.deckId)
        .then(() => res.sendStatus(204))
        .catch(next)
}

function list(req, res, next) {
    decksService
        .list(req.params.userId)
        .then((data) => res.json({ data }))
        .catch(next)
}

async function allDecks(req, res, next) {
    decksService
        .allDecks()
        .then((data) => res.json({ data }))
        .catch(next)
}

module.exports = {
    create: [asyncErrorBoundary(create)],
    read: [asyncErrorBoundary(deckExists), asyncErrorBoundary(read)],
    update: [asyncErrorBoundary(update)],
    destroy: [asyncErrorBoundary(deckExists), asyncErrorBoundary(destroy)],
    list: [asyncErrorBoundary(list)],
    allDecks: [asyncErrorBoundary(allDecks)],
}