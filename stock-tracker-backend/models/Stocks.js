const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Stocks', StockSchema);
