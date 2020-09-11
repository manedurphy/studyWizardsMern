require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('Connected to the Study Wizards Database!');
  } catch (error) {
    console.error(error.message);
    process.exit(1); //check the docs for this
  }
};

module.exports = connectDB;
