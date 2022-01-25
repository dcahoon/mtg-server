const express = require("express")
const app = express()
const decksRouter = require("./decks/decks.router")
const usersRouter = require("./users/users.router")
const cardsRouter = require("./cards/cards.router")
const decksCardsRouter = require("./decks_cards/decks_cards.router")
const cors = require("cors")

app.use(express.json())

app.use(cors({ origin: "http://localhost:3000"}))
app.use("/decks", decksRouter)
app.use("/users", usersRouter)
app.use("/cards", cardsRouter)
app.use("/decks-cards", decksCardsRouter)

// Not found handler
app.use((req, res, next) => {
    next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

// Error handler
app.use((error, req, res, next) => {
    console.error(error);
    const { status = 500, message = "Something went wrong!" } = error;
    res.status(status).json({ error: message });
});

module.exports = app