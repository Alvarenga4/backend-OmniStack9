const mongoose = require('mongoose');

//Cria a tabela com as colunas pelo mongoose
const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId, // Salva o id do usuario
    ref: 'User'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, // Salva o id do spot
    ref: 'Spot'
  },
});

//Cria realmente a tabela
module.exports = mongoose.model('Booking', BookingSchema); 