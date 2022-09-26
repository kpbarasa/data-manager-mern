const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const data_chema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  data_title: {
    type: String,
    required: true,
    unique: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  group_Id: {
    type: String,
    required: true,
  },
  data_type: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  data_count: {
    type: Number,
    required: true,
  },
  data_status: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  }
},
  {
    timestamps: true,
    _id: false
  }
);

const data = mongoose.model('data-index', data_chema);

module.exports = data;