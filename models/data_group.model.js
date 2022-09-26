const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  group_title: {
    type: String,
    required: true, 
    unique: true,
    index:{unique: true}
  },
  group_content: {
    type: String,
    required: true,  
  },
  data_group_type: {
    type: String,
    required: true,  
  }, 
});

const dataGroup = mongoose.model('dataGroup', dataSchema);

module.exports = dataGroup;