const mongoose = require('mongoose')

const overtimeSchema = mongoose.Schema({
    school: {
        type: mongoose.Types.ObjectId,
        ref: "school"
    },
    student: {
        type: mongoose.Types.ObjectId,
        ref: "Students"
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Cleared",],
        default: "Pending",
        required: true,
    },
    overtime_key: [{
        key: Number
    }]

}, {
    timestamps: true
})

const overtime = mongoose.model('Overtime', overtimeSchema)
module.exports = overtime

