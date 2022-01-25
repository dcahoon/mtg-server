const router = require("express").Router({ mergeParams: true })
const controller = require("./decks_cards.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

router.route("/:deckId/:cardId")
    .get(controller.read)
    .delete(controller.destroy)
    .put(controller.update)
    .all(methodNotAllowed)

router.route("/:deckId")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed)

router.route("/")
    .get(controller.allDecksCards)
    .all(methodNotAllowed)

module.exports = router