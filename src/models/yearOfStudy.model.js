const mongoose = require('mongoose')

const yearOfStudySchema = mongoose.Schema({
    current_year: {
        type: String,
        required: true
    },
    current_class: {
        type: String,
        required: true
    },
    current_stream:{
        type: String,
        required: true
    },
    addedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff'
    },
    year_key :[{
        key: Number,
    }]
}, {
    timestamps: true
})

const year = mongoose.model('YearOfStudy', yearOfStudySchema)
module.exports = year