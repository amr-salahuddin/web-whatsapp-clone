
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');


const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello')
})



module.exports = app