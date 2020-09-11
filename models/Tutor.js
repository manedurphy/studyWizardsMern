const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TutorSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Tutor = mongoose.model('tutor', TutorSchema);
