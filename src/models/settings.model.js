const mongoose = require('mongoose')
const autoIncrementSettings = require('mongoose-sequence')(mongoose)
// const schema = mongoose.Schema()

const settingSchema = mongoose.Schema({
    school_id: {
        type: mongoose.Types.ObjectId,
        ref: "school"
    },
    drop_off_start_time: {
        type: String,
        required: true
    },
    drop_off_end_time: {
        type: String,
        required: true
    },
    pick_up_start_time: {
        type: String,
        required: true
    },
    pick_up_end_time: {
        type: String,
        required: true
    },
    drop_off_allowance: {
        type: String,
        required: true
    },
    pick_up_allowance: {
        type: String,
        required: true
    },
    overtime_rate: {
        type: String
    },
    overtime_rate_currency: {
        type: String
    },
    overtime_interval: {
        type: String
    },
    settings_key: [{ //nesting an object to get the key of the settings
        key: Number
    }]
}, {
    timestamps: true
}
)

settingSchema.plugin(autoIncrementSettings, { inc_field: 'settings_no' })


const settings = mongoose.model('Settings', settingSchema)
module.exports = settings