const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoute = require('./routes/auth');

const dbURI = 'mongodb+srv://DCPGroup:hjHAkaCrvHTWwlPt@cluster0.noqkz.mongodb.net/test';

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', "Content-Type");
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use(express.json({}));
app.use('/api/auth', authRoute);

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (err) => { console.err(err) });
db.once('open', () => { console.log('DB started successfully') });

app.listen(2400, () => { console.log('Server started: 2400') });