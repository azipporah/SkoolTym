const dropPickSchema = require('../models/dropOff-pickUp.model');

module.exports = {
    create: async (req, res) => {
        try {
            const drop_pick = {
                school_name: req.body.school_name,
                student_name: req.body.student_name,
                drop_off_time: req.body.drop_off_time,
                dropped_by: req.body.dropped_by,
                pick_up_time: req.body.pick_up_time,
                picked_by: req.body.picked_by,
                authorized_by: req.body.authorized_by,
                comments: req.body.comments,
                pickDrop_key: req.body.pickDrop_key
            }
            const newDropPick = await dropPickSchema.create(drop_pick)
            newDropPick.save().then(() => { res.status(201).send(newDropPick) })
        } catch (error) {
            res.status(400).send(error.message)
            console.log(error);
        }
    }
}