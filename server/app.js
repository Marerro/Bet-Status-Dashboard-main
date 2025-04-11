const express = require('express');
const errorHandler = require('./middlewares/errorHandler');

//endpoint imports
const betsRouter = require('./routers/bets.router');

const app = express();

app.use(express.json());

app.use('/api/v1/bets', betsRouter);

app.use(errorHandler)

module.exports = app;