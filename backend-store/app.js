const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const productsRoutes = require('./routes/productsRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const StripeRoutes = require('./routes/stripeRoutes');
const ErrorController = require('./controllers/ErrorController');
const morgan = require('morgan');
const AppError = require('./utils/AppError');

const app = express();

const allowedOrigins = ['http://localhost:3000'];

const logRequestBody = (req, res, next) => {
  console.log('Request Body:', req.body);
  next();
};

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true
  })
);

app.use(morgan('dev'));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(cookieParser());

app.use(bodyParser.json());

app.use(logRequestBody);

app.use('/api/v1/products', productsRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/cart', cartRoutes);
app.use('/api/v1/stripe-checkout', StripeRoutes);
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
});

app.use(ErrorController);

//Starting the server

module.exports = app;
