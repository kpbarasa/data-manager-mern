const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  category_title: {
    type: String,
    required: true, 
    unique: true,
    index:{unique: true}
  }, 
});

const dataCategory = mongoose.model('dataCategory', dataSchema);

module.exports = dataCategory;