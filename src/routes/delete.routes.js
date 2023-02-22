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
const dropPickSchema = require('../models/dropOff-pickUp.model')
const settingSchema = require('../models/settings.model')

// delete a school
router.delete('/schools/:school_no', async (req, res) => {
    try {
        const sch = await schoolSchema.findById(req.params.id)
        // if (!sch) {
        //     res.status(404).send("School doesn't exist!")
        // }
        const schToDelete = await schoolSchema.deleteOne({ _id: req.params.school_no }) //checking if school with specified id exists in db/schema
        res.json(schToDelete).then(() => {res.status(200).send("School deleted successfully")}) 
        // res.json(schToDelete)

    } catch (error) {
        // res.json({ message: error })
    }
})

// delete a student
router.delete('/students/:student_no', async (req, res) => {
    try {
        const student = await studentSchema.findById(req.params.id)
        // if (!student) {
        //     res.status(404).send("Student doesn't exist!")
        // }
        const studentToDelete = await studentSchema.deleteOne({ _id: req.params.student_no }) //checking if student with specified student_no exists in db/schema
        res.json(studentToDelete).then(() => {res.status(200).send("Student deleted successfully")}) 
        // res.json(studentToDelete)

    } catch (error) {
        res.json({ message: error })
    }
})

// delete a staff
router.delete('/staff/:staff_no', async (req, res) => {
    try {
        const staff = await staffSchema.findById(req.params.id)
        // if (!staff) {
        //     res.status(404).send("Staff member doesn't exist!")
        // }
        const staffToDelete = await staffSchema.deleteOne({ _id: req.params.staff_no }) //checking if school with specified id exists in db/schema
        res.json(staffToDelete).then(() => {res.status(200).send("Staff deleted successfully")}) 
        // res.status(200).json(staffToDelete)

    } catch (error) {
        res.json(error)
    }
})

// delete a guardian
router.delete('/guardians/:guardian_no', async (req, res) => {
    try {
        const guardian = await guardianSchema.findById(req.params.id)
        // if (!guardian) {
        //     res.status(404).send("Guardian doesn't exist!")
        // }
        const guardianToDelete = await guardianSchema.deleteOne({ _id: req.params.guardian_no }) //checking if school with specified id exists in db/schema
        res.json(guardianToDelete).then(() => {res.status(200).send("Guardian deleted successfully")}) 
        // res.status(200).json(guardianToDelete)

    } catch (error) {
        res.json({ message: error })
    }
})

// delete a role
router.delete('/roles/:role_no', async (req, res) => {
    try {
        const role = await roleSchema.findById(req.params.id)
        // if (!role) {
        //     res.status(404).send("Role doesn't exist!")
        // }
        const roleToDelete = await roleSchema.deleteOne({ _id: req.params.role_no }) //checking if school with specified id exists in db/schema
        res.json(roleToDelete).then(() => {res.status(200).send("Role deleted successfully")}) 
        // res.json(roleToDelete)

    } catch (error) {
        res.json({ message: error })
    }
})

// delete a year of study
router.delete('/years/:yearOfStudy_no', async (req, res) => {
    try {
        const yearOfStudy = await yearOfStudySchema.findById(req.params.id)
        // if (!yearOfStudy) {
        //     res.status(404).send("Year of study doesn't exist!")
        // }
        const yearToDelete = await yearOfStudySchema.deleteOne({ _id: req.params.yearOfStudy_no }) //checking if school with specified id exists in db/schema
        res.json(yearToDelete).then(() => {res.status(200).send("Year of study deleted successfully")}) 

    } catch (error) {
        res.status(400).json({ message: error })
    }
})

// delete overtime
router.delete('/overtime/:overtime_id', async (req, res) => {
    try {
        const overtime = await overtimeSchema.findById(req.params.id)
        // if (!yearOfStudy) {
        //     res.status(404).send("Year of study doesn't exist!")
        // }
        const overtimeToDelete = await overtimeSchema.deleteOne({ _id: req.params.overtime_id }) //checking if school with specified id exists in db/schema
        res.json(overtimeToDelete).then(() => {res.status(200).send("Overtime deleted successfully")}) 

    } catch (error) {
        res.status(400).json({ message: error })
    }
})

// delete drop-off/pick-off
router.delete('/dropPick/:dropPick_id', async (req, res) => {
    try {
        const dropPick = await dropPickSchema.findById(req.params.id)
        // if (!yearOfStudy) {
        //     res.status(404).send("Year of study doesn't exist!")
        // }
        const dropPickToDelete = await dropPickSchema.deleteOne({ _id: req.params.dropPick_id }) //checking if school with specified id exists in db/schema
        res.json(dropPickToDelete).then(() => {res.status(200).send("Drop/pick deleted successfully")}) 

    } catch (error) {
        res.status(400).json({ message: error })
    }
})


// delete a settings
router.delete('/settings/:settings_no', async (req, res) => {
    try {
        const settings = await settingSchema.findById(req.params.id)
        if (!settings) {
            res.status(404).send("School doesn't exist!")
        }
        const settingsToDelete = await settingSchema.deleteOne({ _id: req.params.settings_no }) //checking if school with specified id exists in db/schema
        res.json(settingsToDelete)

    } catch (error) {
        res.json({ message: error })
    }
})

module.exports = router
