const router = require("express").Router({ mergeParams: true })
const controller = require("./cards.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

router.route("/new")
    .post(controller.create)
    .all(methodNotAllowed)

router.route("/:multiverseid")
    .get(controller.read)
    .all(methodNotAllowed)

router.route("/")
    .get(controller.list)
    .all(methodNotAllowed)

module.exports = router
