const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = Schema({
  mainHeading: {
    type: String,
    required: true,
  },
  mainSubheading: String,
  heading1: String,
  heading2: String,
  heading3: String,
  heading4: String,
  heading5: String,
  p1: String,
  p2: String,
  p3: String,
  p4: String,
  p5: String,
});

module.exports = Blog = mongoose.model('Blog', BlogSchema);
