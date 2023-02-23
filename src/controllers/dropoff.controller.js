const dropoffSchema = require('../models/dropoff.model');

module.exports = {
    create: async (req, res) => {
        try {
            const dropoff = {
                school_name: req.body.school_name,
                student_name: req.body.student_name,
                drop_off_time: req.body.drop_off_time,
                dropped_by: req.body.dropped_by,
                pick_up_time: req.body.pick_up_time,
                picked_by: req.body.picked_by,
                authorized_by: req.body.authorized_by,
                comments: req.body.comments,
                event_key: req.body.event_key
            }
            const newDropoff = await dropoffSchema.create(dropoff)
            newDropoff.save().then(() => { res.status(201).send(newDropoff) })
        } catch (error) {
            res.status(400).send(error.message)
            console.log(error);
        }
    }
}