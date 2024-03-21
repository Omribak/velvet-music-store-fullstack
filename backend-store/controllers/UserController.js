const User = require('../models/UserModel');
const AppError = require('../utils/AppError');
const bcrypt = require('bcrypt');
const { validateFields } = require('../utils/validatorsFunctions');
const jwt = require('jsonwebtoken');
const { Cart } = require('../models/CartModel');

exports.SignUp = async (req, res, next) => {
  const fieldsToValidate = {
    fullname: true,
    email: true,
    password: true
  };
  const ValidationFailed = validateFields(req, fieldsToValidate, next);

  if (ValidationFailed) {
    return;
  }
  if (req.body.fullname.length < 1 || req.body.fullname.length > 10) {
    const error = new AppError(
      'Fullname must be between 1 and 10 characters long.',
      400
    );
    return next(error);
  }

  if (req.body.password.length < 8) {
    const error = new AppError('Password must be atleast 8 digits long.', 400);
    return next(error);
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(req.body.email)) {
    const error = new AppError('Invalid email format', 400);
    return next(error);
  }

  const userWithEmail = await User.findOne({ email: req.body.email });

  if (userWithEmail) {
    const error = new AppError('Email is already taken', 400);
    return next(error);
  }
  bcrypt.hash(req.body.password, 10, async (err, hash) => {
    if (err) {
      res.status(500).json({
        error: err
      });
      return next();
    } else {
      const user = new User({
        email: req.body.email,
        password: hash,
        fullname: req.body.fullname
      });
      try {
        await user.save();
        console.log(user);
        res.status(201).json({
          message: 'User Created!'
        });
      } catch (error) {
        res.status(500).json({
          message: error
        });
      }
    }
  });
};

exports.Login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    const error = new AppError("Email or Password can't be empty", 400);
    return next(error);
  }
  const user = await User.find({ email: req.body.email });
  try {
    if (user.length < 1) {
      return res.status(401).json({
        message: 'Wrong email or password'
      });
    }
    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
      if (err) {
        return res.status(401).json({
          message: 'Wrong email or password'
        });
      }
      if (result) {
        const token = jwt.sign(
          {
            email: user[0].email,
            userId: user[0]._id,
            fullname: user[0].fullname
          },
          process.env.JWT_KEY,
          {
            expiresIn: '1h'
          }
        );
        const cookieOptions = {
          expires: new Date(Date.now() + 60 * 60 * 1000),
          httpOnly: true,
          secure: false
        };
        res.cookie('jwt', token, cookieOptions);
        return res.status(200).json({
          message: 'Login Sucessful!'
        });
      }
      res.status(401).json({
        message: 'Wrong email or password'
      });
    });
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};

exports.isLoggedIn = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.json({
      message: 'Unauthorized'
    });
  }
  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: 'Invalid Token'
      });
    }
    req.userData = decoded;
    const user_data = req.userData;

    return res.status(200).json({
      message: 'Authorized',
      user_data
    });
  });
};

exports.Logout = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(400).json({
      message: 'You are not logged in.'
    });
  }
  res.clearCookie('jwt', { httpOnly: true });
  res.status(200).json({
    message: 'Logged out successfully'
  });
};
