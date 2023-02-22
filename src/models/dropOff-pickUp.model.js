const mongoose = require('mongoose')

const pickDropSchema = mongoose.Schema({
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
    pickDrop_key: [{
        key: Number
    }]
}, {
    timestamps: true
})

const pickDrop = mongoose.model("PickDrop", pickDropSchema)
module.exports = pickDrop