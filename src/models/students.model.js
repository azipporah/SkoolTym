const mongoose = require('mongoose')
const autoIncrementstudent = require('mongoose-sequence')(mongoose)

// importing schoolSchema
// const school = require('./schools.model')

const studentSchema = new mongoose.Schema({
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'school'    
         // required: true,
    },
    student_fname: {
        type: String,
        required: true
    },
    student_lname: {
        type: String,
        required: true
    },
    student_contact: {
        type: Number,
        required: true
    },
    student_email: {
        type: String,
        required: true
    },
    student_class: {
        type: String,
        required: true
    },
    student_gender: {
        type: String,
        enum: ['Male', 'Female'],
        default: 'Male',
        required: true
    },
    student_profile_pic: {
        type:String,
        required: true,
        data: Buffer,
        contentType: String
    },
    
},{
    timestamps: true
})

studentSchema.plugin(autoIncrementstudent, {inc_field:'student_no'})

const students = mongoose.model("Students", studentSchema)
module.exports = students