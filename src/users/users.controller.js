const usersService = require("./users.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")
const users = require("../db/fixtures/users")

function list(req, res, next) {
    usersService
        .list()
        .then((data) => res.json({ data }))
        .catch(next)
}

async function create(req, res, next) {
    const newUser = await usersService.create(req.body.data)
    res.status(201).json({
        data: newUser,
    })
}

module.exports = {
    list: [asyncErrorBoundary(list)],
    create: [asyncErrorBoundary(create)],
}