require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const MCQRoute = require('./routes/MCQRoute');

const app = express();
app.use(express.json());

const whiteList = ['https://nedim-se.github.io/'];

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use('/mcqs', MCQRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(
      process.env.PORT,
      console.log('Connection established and server started')
    );
  })
  .catch((err) => {
    console.log(err);
  });
