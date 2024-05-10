require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

// GLOBAL ROUTES AND MIDDLEWARE
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userRouter = require('./controllers/user.controller');

app.use(userRouter);

module.exports = app;