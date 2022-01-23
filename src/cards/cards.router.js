const router = require("express").Router({ mergeParams: true })
const controller = require("./cards.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

router.route("/")
    .all(methodNotAllowed)

module.exports = router
