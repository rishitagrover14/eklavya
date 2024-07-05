const mongoose=require('mongoose');
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

const student=mongoose.model('student',studentSchema)
module.exports=student