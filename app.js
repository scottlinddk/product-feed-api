const config = require('./config/config.json');
const env = process.env.NODE_ENV;
const configration = config[env];

const cors = require('cors');
const express = require('express'); // require express because we want to use it
const app = express(); // create app with express
app.use(cors());

// const feed = require('./routes/feeds');
const routes = require('./routes');

app.use(express.json()); // Turns our data in to json data

// app.use('/api/feed', feed);
app.use('/api/', routes);
// app.listen(3000, () => console.log(`Listening on port 3000... yo ${port}`)); // Make app listen to port

module.exports = app;
