const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  cat_title: {
    type: String,
    required: true, 
    unique: true,
    index:{unique: true}
  }, 
  data_cat_parent: {
    type: String,
    required: true,  
  }, 
});

const dataCat = mongoose.model('dataCat', dataSchema);

module.exports = dataCat;