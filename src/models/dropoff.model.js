const mongoose = require('mongoose')

const dropoffSchema = mongoose.Schema({
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
    drop_off_time: {
        type: String,
        required: true
    },
    dropped_by: {
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
    dropoff_key: [{
        key: Number
    }]
}, {
    timestamps: true
})

const dropoff = mongoose.model("PickDrop", dropoffSchema)
module.exports = dropoff