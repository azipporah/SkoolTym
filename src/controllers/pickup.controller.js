const pickupSchema = require('../models/pickup.model');

module.exports = {
    create: async (req, res) => {
        try {
            const pickup = {
                school_name: req.body.school_name,
                student_name: req.body.student_name,
                pick_up_time: req.body.pick_up_time,
                picked_by: req.body.picked_by,
                authorized_by: req.body.authorized_by,
                comments: req.body.comments,
                pickup_key: req.body.pickup_key
            }
            const newPickup = await pickupSchema.create(pickup)
            newPickup.save().then(() => { res.status(201).send(newPickup) })
        } catch (error) {
            res.status(400).send(error.message)
            console.log(error);
        }
    }
}