const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.route('/sign-up').post(UserController.SignUp);
router.route('/login').post(UserController.Login);
router.route('/check-auth').get(UserController.isLoggedIn);
router.route('/logout').post(UserController.Logout);

// router
//   .route("/:userId")
//   .delete(UsersController.DeleteUser)
//   .get(UsersController.GetUser)
//   .patch(UsersController.UpdateUser);

module.exports = router;
