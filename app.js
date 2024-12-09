const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const connectDB = require('./models/dbConnection');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
connectDB();

app.use('/', postRoutes);

app.listen(3000, () => console.log('Server is running on port 3000'));