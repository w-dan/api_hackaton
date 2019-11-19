/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const app = require('./app');

const mongodb = process.env.MONGODB || 'mongodb://localhost:3000/apihackatron';
const port = process.env.PORT || 3000;

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) console.log(`ERROR: connecting to Database. ${err}`);
  else app.listen(port, console.log(`API started on: http://localhost:${port}`));
});
