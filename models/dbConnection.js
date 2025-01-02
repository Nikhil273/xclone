const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://Nikhil:<yourpass>@cluster0.v3q8r.mongodb.net/xclone';

const connectDB = async () => {
  try {
    await mongoose.connect(connectionString, {
      family: 4
    });
    console.log("<----Connected to database---->");

  } catch (err) {
    console.log("<----Error in connecting to database---->", err.message);
  }
};



module.exports = connectDB;
