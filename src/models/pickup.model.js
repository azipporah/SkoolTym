const mongoose = require('mongoose')

const pickupSchema = mongoose.Schema({
    school_name: {
        type: mongoose.Types.ObjectId,
        ref: "school",
        required: true
    },
    student_name: {
        type: mongoose.Types.ObjectId,
        ref: "Students",
        required: true
    },
    pick_up_time: {
        type: String,
        required: true
    },
    picked_by: {
        type: mongoose.Types.ObjectId,
        ref: "Guardians",
        required: true
    },
    authorized_by: {
        type: mongoose.Types.ObjectId,
        ref: "Staff",
        required: true
    },
    comments: {
        type: String,
        required: true
    },
    pickup_key: [{
        key: Number
    }]
}, {
    timestamps: true
})

const pickup = mongoose.model("Pickup", pickupSchema)
module.exports = pickup