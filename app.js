const config = require('./config/config.json');
const env = process.env.NODE_ENV;
const configration = config[env];

const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());

const routes = require('./routes');

app.use(express.json());

app.use('/api/', routes);

module.exports = app;
