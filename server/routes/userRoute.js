const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();

router.route('/user')
.get(userController.getAllFiles) 
.post(userController.createFile) ;
router.route('/user/:id')
.get(userController.getFiles) 

router.route('/dashboard')
.get(userController.getDashboardStats) 

// .patch(userController.upDateFile)
// .delete(userController.deleteFile) ;

module.exports = router ;