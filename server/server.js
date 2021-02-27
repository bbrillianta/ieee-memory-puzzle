//Import modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const cors = require('cors');

//Basic configuration
const app = express();
const mongoConn = mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Mongoose setup
const { Schema } = mongoose;
const dateSchema = new Schema({
    date: String,
    desc: String,
    url: String
});

const Date = mongoose.model('Date', dateSchema, 'dates');

//Routing
app.get('/', (req, res) => {
    res.json({});
});

app.post('/store', async (req, res) => {
    const { date, desc, url } = req.body;
    const doc = await new Date({
        date,
        desc,
        url
    });

    const storedDoc = await doc.save();

    res.json({ success: true, storedDoc });
});

//Starting server
app.listen(process.env.PORT || 3001, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT || 3001}`);
});