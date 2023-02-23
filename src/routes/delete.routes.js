const express = require('express')
const router = express.Router()
const path = require('path')

// importing models/schemas
const schoolSchema = require('../models/schools.model')
const studentSchema = require('../models/students.model')
const staffSchema = require('../models/staff.model')
const guardianSchema = require('../models/guardians.model')
const roleSchema = require('../models/roles.model')
const yearOfStudySchema = require('../models/yearOfStudy.model')
const overtimeSchema = require('../models/overtime.model')
const dropoffSchema = require('../models/dropoff.model')
const pickupSchema = require('../models/pickup.model')
const settingSchema = require('../models/settings.model')

// delete a school
router.delete('/schools/:sch_id', async (req, res) => {
    try {
        const school = await schoolSchema.findById({ _id: req.params.sch_id })
        console.log(school);
        if (school) {
            const schoolToDelete = await schoolSchema.deleteOne({ _id: req.params.sch_id })
            res.json(schoolToDelete)
            // res.send('School deleted successfully')
        }
        else {
            res.status(404).send("School doesn't exist!")
        }
    } catch (error) {
        res.json({ message: error })
    }
})

// delete a student
router.delete('/students/:student_id', async (req, res) => {
    try {
        const student = await studentSchema.findById({ _id: req.params.student_id })
        // console.log(student);
        if (student) {
            const studentToDelete = await studentSchema.deleteOne({ _id: req.params.student_id })
            res.json(studentToDelete)
            // res.send('Student deleted successfully')
        }
        else {
            res.status(404).send("Student doesn't exist!")
        }
    } catch (error) {
        res.json({ message: error })
    }
})

// delete a staff
router.delete('/staff/:staff_id', async (req, res) => {
    try {
        const staff = await staffSchema.findById({ _id: req.params.staff_id })
        // console.log(staff);
        if (staff) {
            const staffToDelete = await staffSchema.deleteOne({ _id: req.params.staff_id })
            res.json(staffToDelete)
            // res.send('Staff deleted successfully')
        }
        else {
            res.status(404).send("Staff doesn't exist!")
        }
    } catch (error) {
        res.json({ message: error })
    }
})

// delete a guardian
router.delete('/guardians/:guardian_id', async (req, res) => {
    try {
        const guardian = await guardianSchema.findById({ _id: req.params.guardian_id })
        // console.log(guardian);
        if (guardian) {
            const guardianToDelete = await guardianSchema.deleteOne({ _id: req.params.guardian_id })
            res.json(guardianToDelete)
            // res.send('Guardian deleted successfully')
        }
        else {
            res.status(404).send("Guardian doesn't exist!")
        }
    } catch (error) {
        res.json({ message: error })
    }
})

// delete a role
router.delete('/roles/:role_id', async (req, res) => {
    try {
        const role = await roleSchema.findById({ _id: req.params.role_id })
        // console.log(role);
        if (role) {
            const roleToDelete = await roleSchema.deleteOne({ _id: req.params.role_id })
            res.json(roleToDelete)
            // res.send('Role deleted successfully')
        }
        else {
            res.status(404).send("Role doesn't exist!")
        }
    } catch (error) {
        res.json({ message: error })
    }
})

// delete a year of study
router.delete('/years/:year_id', async (req, res) => {
    try {
        const year = await yearOfStudySchema.findById({ _id: req.params.year_id })
        // console.log(year);
        if (year) {
            const yearToDelete = await yearOfStudySchema.deleteOne({ _id: req.params.year_id })
            res.json(yearToDelete)
            // res.send('Year of study deleted successfully')
        }
        else {
            res.status(404).send("Year of study doesn't exist!")
        }
    } catch (error) {
        res.json({ message: error })
    }
})

// delete overtime
router.delete('/overtime/:overtime_id', async (req, res) => {
    try {
        const overtime = await overtimeSchema.findById({ _id: req.params.overtime_id })
        // console.log(overtime);
        if (overtime) {
            const overtimeToDelete = await overtimeSchema.deleteOne({ _id: req.params.overtime_id })
            res.json(overtimeToDelete)
            // res.send('Overtime deleted successfully')
        }
        else {
            res.status(404).send("Overtime doesn't exist!")
        }
    } catch (error) {
        res.json({ message: error })
    }
})

// delete drop-off
router.delete('/dropoff/:dropoff_id', async (req, res) => {
    try {
        const dropoff = await eventSchema.findById({ _id: req.params.dropoff_id })
        // console.log(dropoff);
        if (dropoff) {
            const dropoffToDelete = await dropoffSchema.deleteOne({ _id: req.params.dropoff_id })
            res.json(dropoffToDelete)
            // res.send('Drop-off deleted successfully')
        }
        else {
            res.send("Drop-off doesn't exist!")
        }
    } catch (error) {
        res.json({ message: error })
    }
})

// delete pick-up
router.delete('/pickup/:pickup_id', async (req, res) => {
    try {
        const pickup = await eventSchema.findById({ _id: req.params.pickup_id })
        // console.log(pickup);
        if (pickup) {
            const pickupToDelete = await pickupSchema.deleteOne({ _id: req.params.pickup_id })
            res.json(pickupToDelete)
            // res.send('Pick-up deleted successfully')
        }
        else {
            res.send("Pick-up doesn't exist!")
        }
    } catch (error) {
        res.json({ message: error })
    }
})


// delete a settings
router.delete('/settings/:settings_id', async (req, res) => {
    try {
        const settings = await settingSchema.findById({ _id: req.params.settings_id })
        // console.log(settings);
        if (settings) {
            const settingsToDelete = await settingSchema.deleteOne({ _id: req.params.settings_id })
            res.json(settingsToDelete)
            // res.send('Settings deleted successfully')
        }
        else {
            res.send("Settings doesn't exist!")
        }
    } catch (error) {
        res.json({ message: error })
    }
})

module.exports = router
