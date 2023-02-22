const mongoose = require('mongoose')
const autoIncrementRole = require('mongoose-sequence')(mongoose)

const roleSchema = mongoose.Schema({
    role_type:{
        type: String,
        enum: ['Admin', 'Finance', 'Tracker','Guardian'],
        default: 'Admin',
        required: true
    },
    role_key: [{
        key:Number
    }]
},{
    timestamps: true
}
)

roleSchema.plugin(autoIncrementRole, {inc_field:'role_no'}) //for incrementing role


const roles = mongoose.model('Roles',roleSchema)
module.exports = roles