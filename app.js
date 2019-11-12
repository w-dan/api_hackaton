const bodyParser = require('body-parser');
const express = require('express');
const userRoute = require('./routes/userRoute.js');
const libroRoute = require('./routes/libroRoute');
 
const app = express();
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/user', userRoute);
app.use('/libro', libroRoute);
 
module.exports = app;