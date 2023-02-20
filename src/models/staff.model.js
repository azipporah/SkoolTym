const mongoose = require('mongoose')
const autoIncrementStaff = require('mongoose-sequence')(mongoose)
// const schema = mongoose.Schema()

const staffSchema = new  mongoose.Schema({
    staff_school: {
        type: mongoose.Types.ObjectId,
        ref: "school"
    },
    staff_fname: {
        type: String,
        required: true
    },
    staff_lname: {
        type: String,
        required: true
    },
    staff_contact: {
        type: Number,
        required: true
    },
    staff_email: {
        type: String,
        required: true
    },
    staff_role: {
        type: mongoose.Types.ObjectId,
        ref: "Roles" 
        // required:true 
    },
    staff_gender: {
        type: String,
        enum: ['Male', 'Female'],
        default: 'Male',
        required: true
    },
    staff_profilePic: {
        type: String,
        data: Buffer,
        contentType: String,
        required: true
    },
    // isCompleted: {
    //     type: Boolean,
    //     required: true,
    //     default:false
    // }

}, {
    timestamps: true
}
)
staffSchema.plugin(autoIncrementStaff, { inc_field: 'staff_no' })

const staff = mongoose.model('Staff', staffSchema)
module.exports = staff