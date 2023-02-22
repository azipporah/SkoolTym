const mongoose = require('mongoose')
const autoIncrementguardian = require('mongoose-sequence')(mongoose)
// const schema = mongoose.Schema()

const guardianSchema = mongoose.Schema({
    // school: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "school"
    // },
    student: {
        type: mongoose.Types.ObjectId,
        ref: "Students"
    },
    relationship: {
        type: String,
        enum: ['Mother','Father','Brother','Sister','Driver'],
        default: 'Mother',
        required: true
    },
    guardian_fname: {
        type: String,
        required: true
    },
    guardian_lname: {
        type: String,
        required: true
    },
    guardian_contact: {
        type: Number,
        required: true
    },
    guardian_email: {
        type: String,
        required: true
    },
    guardian_gender: {
        type: String,
        enum: ['Male', 'Female'],
        default: 'Male',
        required: true
    },
    guardian_profile_pic: {
        type: String,
        data: Buffer,
        contentType: String,
        required: true
    },
    guardian_dateOfEntry: {
        type: Date,
        required: true
    },
    guardian_key: [{
        key:Number        
    }]
    // isCompleted: {
    //     type: Boolean,
    //     required: true,
    //     default:false
    // }

}, {
    timestamps: true
}
)

guardianSchema.plugin(autoIncrementguardian, { inc_field: 'guardian_no' })

const guardians = mongoose.model('Guardians', guardianSchema)
module.exports = guardians