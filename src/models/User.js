const mongoose = require('mongoose');

//Cria a tabela com as colunas pelo mongoose
const UserSchema = new mongoose.Schema({
  email: String,
});

//Cria realmente a tabela
module.exports = mongoose.model('User', UserSchema); 