const express = require('express')
const router = express.Router()
const path = require('path')

// importing models/schemas
const schoolSchema = require('../models/schools.model')
// const studentSchema = require('../models/students.model')
// const staffSchema = require('../models/staff.model')
// const guardianSchema = require('../models/guardians.model')
// const roleSchema = require('../models/roles.model')
// const settingSchema = require('../models/settings.model')

// Updating school details
router.patch('/schools/:sch_id', async (req, res) => {
    const sch = await schoolSchema.findById(req.params.sch_id)
    if (!sch) {
        res.status(404).send("School doesn't exist!")
    } else {
        try {
            const updatedSch = await schoolSchema.findByIdAndUpdate({ _id: req.params.sch_id }, {
                $set: {
                    school_key: req.body.school_key,
                    school_name: req.body.school_name,
                    school_motto: req.body.school_motto,
                    school_badge: req.file.path,
                    school_address: req.body.school_address,
                    school_contact: req.body.school_contact,
                    school_about: req.body.school_about
                }
            })
            await updatedSch.save()
            res.send(updatedSch)
            console.log(updatedSch);

        } catch (error) {
            res.json({ message: error })
        }
    }
})

module.exports = router
