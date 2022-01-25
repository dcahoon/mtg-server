const cardsService = require("./cards.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

function cardExists(req, res, next) {
    cardsService
        .read(req.params.multiverseid)
        .then((card) => {
            if (card) {
                res.locals.card = card
                return next()
            }
            next({ status: 404, message: `Card not found multiverseid: ${req.params.multiverseid}`})
        })
        .catch(next)
}

async function create(req, res, next) {
    const newCard = await cardsService.create(req.body.data)
    res.status(201).json({
        data: newCard,
    })
}

function read(req, res, next) {
    res.json({ data: res.locals.card })
}

function list(req, res, next) {
    cardsService
        .list()
        .then((data) => res.json({ data }))
        .catch(next)
}

module.exports = {
    create: [asyncErrorBoundary(create)],
    read: [asyncErrorBoundary(cardExists), asyncErrorBoundary(read)],
    list: [asyncErrorBoundary(list)],
}