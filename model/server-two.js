require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const { connect } = require('./dbconnectContainertest');

const app = express();

// GLOBAL ROUTES AND MIDDLEWARE
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connect();

const userRouter = require('./controllers/user.controller');

app.use(userRouter);
// PORT 
const PORT = process.env.PORT || 5000

// Starting the Server
app.listen(PORT, () => {
    console.log(`Dev Server is listening on port ${PORT}`);
})