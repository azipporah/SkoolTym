const mongoose = require('mongoose')
const autoIncrementSettings = require('mongoose-sequence')(mongoose)
// const schema = mongoose.Schema()

const settingSchema = mongoose.Schema({
    settings_schId: { type: mongoose.Types.ObjectId, ref: "Schools" },
    drop_off_start_time: {
        // timestamps: true
    },
    drop_off_end_time: {
        // timestamps: true
    },
    pick_up_start_time: {
        // timestamps: true
    },
    pick_up_end_time: {
        // timestamps: true
    },
    drop_off_allowance: {
        type: Date
    },
    pick_up_allowance: {
        type: Date
    },
    overtime_rate: {
        type: Number
    },
    overtime_rate_currency: {
        type: Number
    },
    overtime_interval: {
        type: Date
    },
    // isCompleted: {
    //     type: Boolean,
    //     required: true,
    //     default:false
    // }
},{
    timestamps: true
}
)

settingSchema.plugin(autoIncrementSettings, {inc_field:'settings_no'})


const settings = mongoose.model('Settings', settingSchema)
module.exports = settings