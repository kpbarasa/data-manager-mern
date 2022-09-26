const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const data_videos_schema = new Schema({
  data_index_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  data_group_id: {
    type: String,
    required: true,
  },
  data_value: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  data_mime_type: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
},
  {
    timestamps: true,
  }
);

const data_videos = mongoose.model('data-videos', data_videos_schema);

module.exports = data_videos;