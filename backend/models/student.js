const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const studentSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required:true
    },
    mobile:{
        type: Number,
        maxlength: 10,
        unique:true,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String
    },
    password: {
        required: true,
        type: String,
        minlength:8
    }
})
studentSchema.pre('save',async function(next){
    const student=this;
    if(!student.isModified('password')) return next();
    try{
        // hash password generation
        const salt = await bcrypt.genSalt(10);

        // hash password
        const hashedPassword = await bcrypt.hash(student.password, salt);
        
        // Override the plain password with the hashed one
        student.password = hashedPassword;
        next();
    }catch(err){
        return next(err);
    }
})
const student=mongoose.model('student',studentSchema)
module.exports=student