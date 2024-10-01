
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const app = express();


//region ROUTES
const userRoute = require('./routes/user-route');
const authRoute = require('./routes/auth-route');
const chatRoute = require('./routes/chat-route');
//endregion
const globalErrorHandler = require('./controllers/error-controller');



//region socket
const io = require('socket.io')
//endregion
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: '*',
  allowedHeaders: '*',
  credentials: true,
  optionsSuccessStatus: 200
}));

app.get('/', (req, res) => {
  res.send('hello')
})

app.use('/public', express.static('public'));
app.use('/api/v1/user',userRoute );
app.use('/api/v1/auth',authRoute );
app.use('/api/v1/chat',chatRoute );
app.use(globalErrorHandler);




module.exports = app