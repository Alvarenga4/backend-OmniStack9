const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://omnistack:arena200@omnistack-5ibrb.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true, //Configura algo dentro no mongo para nao dar aviso no terminal
  useUnifiedTopology: true //Configura algo dentro no mongo para nao dar aviso no terminal
})

app.use(express.json());
app.use(routes);

app.listen(4444);