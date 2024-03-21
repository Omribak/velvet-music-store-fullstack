const AppError = require('../utils/AppError');

exports.validateFields = (req, fields, next) => {
  for (const field in fields) {
    if (!req.body[field]) {
      next(new AppError(`Please enter your ${field}`, 400));
      return true;
    }
  }
  return false;
};
