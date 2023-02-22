const settingsSchema = require('../models/settings.model')

module.exports = {
    create : async(req,res) => {
        try {
            const settings = {
                school_id : req.body.school_id,
                drop_off_start_time : req.body.drop_off_start_time,
                drop_off_end_time : req.body.drop_off_end_time,
                pick_up_start_time : req.body.pick_up_start_time,
                pick_up_end_time : req.body.pick_up_end_time,
                drop_off_allowance : req.body.drop_off_allowance,
                pick_up_allowance : req.body.pick_up_allowance,
                overtime_rate : req.body.overtime_rate,
                overtime_rate_currency : req.body.overtime_rate_currency,
                overtime_interval : req.body.overtime_interval,
                settings_key : req.body.settings_key
            }

            const newSettings = await settingsSchema.create(settings)           
            newSettings.save().then(() => {res.status(201).send(newSettings)})


        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}