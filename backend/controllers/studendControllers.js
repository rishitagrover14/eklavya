const Student = require('../models/student');
const {generateToken} = require('../jwt')
const bcrypt=require('bcrypt');

//signup a new user
const createStudent=async (req, res) => {
    try {
    //store student data from body parser
    const { name, email, password ,address,age,mobile} = req.body;

    const user = await Student.create({
      name,
      email,
      password,address,age,mobile
    });
      if(user.email)
      console.log('Data saved successfully');
     
  res.status(201).json({
        data:user
      });
    } catch (error) {
      console.error('Error while saving student data:', error);
      res.status(500).json({ err: {error} });
    }
  }

  //login a user
const loginUser =async(req,res)=>{
  const { email, password } = req.body;
  
  // Check if email and password entered by user
  if (!email || !password) {
    // return next(new ErrorHandler("Please enter email and password", 400));
    return res.status(400).json({error:'Please enter email and password'})
  }

  // Finding user in Database
  const user = await Student.findOne({ email }).select("+password");

  if (!user) {
    // return next(new ErrorHandler("Invalid Email", 401));
    return res.status(401).json({error:'Invalid Email'})
  }

  // Check if password is correct
  const isPasswordMatched = await bcrypt.compare(password, user.password);

   if (!isPasswordMatched) {
  //   return next(new ErrorHandler("Invalid Email or Password", 401));
    return res.status(401).json({error:'Invalid Password'})

  }
  const payload = {
    id: user.id,
  }
console.log(JSON.stringify(payload));
const token = generateToken(payload);
res.status(201).json({
    success:true,
    data:user,
    token:token
  });
}
  module.exports= {createStudent,loginUser};