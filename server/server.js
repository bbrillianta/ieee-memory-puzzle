//Import modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const cors = require('cors');

//Basic configuration
const app = express();
const mongoConn = null;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

//Routing
app.get('/', (req, res) => {
    res.json({});
});

//Starting server
app.listen(process.env.PORT || 3001, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});