const app = require('./app');
const config = require('./config/config.json');
const env = process.env.NODE_ENV;

// app.use('/api/feed', feed);
// app.use('/api/test', test);
const port = config[env].port;
app.listen(port || process.env.PORT, () => {
  console.log(`server running at port ${port}`);
});
