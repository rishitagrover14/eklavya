const Student = require('../models/student');
const createStudent=async (req, res) => {
    try {
    //store student data from body parser
      const data = req.body;
    
      //load data into newstudent
      const newStudent = new Student(data);
      //SAVE the data
      const response = await newStudent.save();
      console.log('Data saved successfully');
      res.status(201).json({ data: response });
    } catch (error) {
      console.error('Error while saving student data:', error);
      res.status(500).json({ err: error });
    }
  }
  module.exports=createStudent;