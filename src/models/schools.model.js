const mongoose = require('mongoose')
const autoIncrement = require('mongoose-sequence')(mongoose)

const schoolSchema = new mongoose.Schema({
    school_name: {
        type: String,
        required: true
    },
    school_motto: {
        type: String,
        required: true
    },
    school_badge: {
        type: String,
        // required: true,
        data: Buffer,
        contentType: String
    },
    school_address: {
        type: String,
        required: true
    },
    school_contact: {
        type: String,
        required: true
    },
    school_about: {
        type: String,
        required: true
    },
    super_admin_staff : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Staff'
    },
    school_key: [{
        key:Number        
    }]
}, {
    timestamps: true
},
)

// incrementing the school count after every save
schoolSchema.plugin(autoIncrement, { inc_field: 'school_no' })

const schools = mongoose.model('school', schoolSchema)
module.exports = schools