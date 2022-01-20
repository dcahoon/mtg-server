const router = require("express").Router({ mergeParams: true })
const controller = require("./decks.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

router.route("/:userId/new")
    .post(controller.create)
    .all(methodNotAllowed)

router.route("/:userId/:deckId")
    .get(controller.read)
    .put(controller.update)
    .delete(controller.destroy)
    .all(methodNotAllowed)

router.route("/:userId")
    .get(controller.list)
    .all(methodNotAllowed)

router.route("/")
    .get(controller.allDecks)
    .all(methodNotAllowed)

module.exports = router