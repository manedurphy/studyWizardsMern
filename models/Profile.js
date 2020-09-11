const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  tutor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tutor',
  },
  education: {
    type: Object,
    required: true,
  },
  subjects: {
    type: [String],
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  services: {
    online: {
      type: Boolean,
      required: true,
    },
    inPerson: {
      type: Boolean,
      require: true,
    },
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
