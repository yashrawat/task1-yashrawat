const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const campaignRoutes = require('./routes/campaign-route');

const app = express();
const PORT = process.env.PORT || 3000;

// db connection
mongoose.connect('mongodb://localhost:27017/db19022021', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => {
        app.listen(PORT);
        console.log('Connected to database');
    })
    .catch(error => {
        console.log('Connection failed ' + error)
    });

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-encoded
app.use(bodyParser.urlencoded({ extended: false }));

// cors
app.use(cors());

// routes
app.use('/api/campaign', campaignRoutes);