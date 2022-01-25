const usersService = require("./users.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

const VALID_PROPERTIES = [
    "username",
    "user_first_name",
    "user_last_name",
    "user_address_line_1",
    "user_address_line_2",
    "user_city",
    "user_state",
    "user_zip",
    "user_favorite_format",
    "user_notes",
    "created_at",
    "updated_at",
]

function userExists(req, res, next) {
    const { userId } = req.params
    usersService
        .read(userId)
        .then((user) => {
            if (user) {
                res.locals.user = user
                return next()
            }
            next({ status: 404, message: `User ${userId} not found.` })
        })
}

function hasOnlyValidProperties(req, res, next) {
    const { data = {} } = req.body
    const invalidFields = Object.keys(data).filter(
        (field) => !VALID_PROPERTIES.includes(field)
    )
    if (invalidFields.length) {
        return next({
            status: 400,
            message: `Invalid field(s): ${invalidFields.join(", ")}`,
        })
    }
    next()
}

async function create(req, res, next) {
    const newUser = await usersService.create(req.body.data)
    res.status(201).json({
        data: newUser,
    })
}

function read(req, res, next) {
    res.json({ data: res.locals.user })
}

function update(req, res, next) {
    const updatedUser = {
        ...req.body.data
    }
    usersService
        .update(updatedUser)
        .then((data) => res.json({ data }))
        .catch(next)
}

function destroy(req, res, next) {
    const { userId } = req.params
    usersService
        .destroy(userId)
        .then(() => res.sendStatus(204))
        .catch(next)
}

function list(req, res, next) {
    usersService
        .list()
        .then((data) => res.json({ data }))
        .catch(next)
}

module.exports = {
    create: [hasOnlyValidProperties, asyncErrorBoundary(create)],
    read: [userExists, read],
    update: [userExists, hasOnlyValidProperties, update],
    destroy: [userExists, destroy],
    list: [list],
}
