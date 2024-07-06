const express = require('express');
const router = express.Router();
const {jwtAuthMiddleware} =require('../jwt')
const {createStudent,loginUser}=require('../controllers/studendControllers')

//routes
router.post('/signup',createStudent);
router.post('/login',loginUser);

module.exports = router;
