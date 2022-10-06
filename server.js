// console.log("Hello");
// console.log(`${process.env.APP_NAME}`)
// console.log(`Ready on ${process.env.NODE_ENV} mode`)
// console.log(`API : ${process.env.API_URL}`)

require('dotenv').config();
const express = require('express');
const routes = require('./routes/tea');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/', routes);

mongoose.connect(
  'mongodb+srv://Yama022:user-server-api@cluster0.tpzjbai.mongodb.net/?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true},
  (err) => {
      if (err) return console.log("Error: ", err);
      console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
  }
);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
