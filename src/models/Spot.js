const mongoose = require('mongoose');

//Cria a tabela com as colunas pelo mongoose
const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId, // Salva o id do usuario
    ref: 'User'
  }
});

//Cria realmente a tabela
module.exports = mongoose.model('Spot', SpotSchema); 