const express = require('express');
const app = express();
require('dotenv').config();
const db=require('./db')
const studentRouter = require('./routes/student');


app.use(express.json()); // Middleware to parse JSON body

const PORT = process.env.PORT || 4000;

app.use('/student', studentRouter); // Mount the router

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
