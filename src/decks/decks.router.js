const router = require("express").Router({ mergeParams: true })
const controller = require("./decks.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

router.route("/new")
    .post(controller.create)
    .all(methodNotAllowed)

router.route("/:deckId")
    .get(controller.read)
    .put(controller.update)
    .delete(controller.destroy)
    .all(methodNotAllowed)

router.route("/")
    .get(controller.list)
    .all(methodNotAllowed)

module.exports = router