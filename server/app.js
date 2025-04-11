const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');

//endpoint imports
const betsRouter = require('./routers/bets.router');

const app = express();

app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL
}))


app.use('/api/v1/bets', betsRouter);

app.use(errorHandler)

module.exports = app;