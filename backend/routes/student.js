const express = require('express');
const router = express.Router();
const createStudent=require('../controllers/studendControllers')

//routes
router.post('/',createStudent);

module.exports = router;
