const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const financeSchema = new Schema({
  saving: Number,
  user: {type: Schema.Types.ObjectId, ref: 'User'},

  
});

const Finance = mongoose.model('Finance', financeSchema);
module.exports = Finance;
