const path = require('path');
const envPath = path.join(__dirname, '../', '.env')
require('dotenv').config({
    path: envPath
});

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);


module.exports = app;