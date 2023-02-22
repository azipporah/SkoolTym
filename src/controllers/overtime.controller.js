const overtimeSchema = require('../models/overtime.model')

module.exports = {
    create : async (req, res) => {
       try {
         const overtime = {
            school : req.body.school,
            student : req.body.student,
            amount : req.body.amount,
            status : req.body.status,
            overtime_key : req.body.overtime_key
        }

        const newOvertime = await overtimeSchema.create(overtime)
        newOvertime.save().then(() => {res.status(201).send(newOvertime)})

       } catch (error) {
        res.status(400).send(error.message)
       }

    }
}