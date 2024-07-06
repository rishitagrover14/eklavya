const express = require('express');
const app = express();
require('dotenv').config();
const db=require('./db')
const studentRouter = require('./routes/student');
const cors = require("cors");

app.use(cors({ credentials: true, origin: ["http://localhost:5000", ""] }));


app.use(express.json()); // Middleware to parse JSON body

const PORT = process.env.PORT || 8000;

app.use('/student', studentRouter); // Mount the router

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
