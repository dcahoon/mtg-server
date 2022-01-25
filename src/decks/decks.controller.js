const decksService = require("./decks.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

async function deckExists(req, res, next) {
    const { userId, deckId } = req.params
    const deck = await decksService.read(userId, deckId)
    if (deck) {
        res.locals.deck = deck
        return next()
    }
    next({ status: 404, message: `Deck ${deckId} not found.` })
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
    const data = await decksService.update(updatedDeck)
    res.json({ data })
}

function destroy(req, res, next) {
    decksService
        .destroy(req.params.deckId)
        .then(() => res.sendStatus(204))
        .catch(next)
}

async function list(req, res, next) {
    const data = await decksService.list()
    res.json({ data })
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