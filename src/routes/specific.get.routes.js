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

// fetching a specific school
router.get("/schools/:school_no", async (req, res) => {
    try {
        const school = await schoolSchema.findById(req.params.school_no)
        res.status(200).send(school)
    } catch (error) {
        res.status(400).send(error)
    }

});

// fetching a specific student
router.get("/students/:student_no", async (req, res) => {
    try {
        const student = await studentSchema.findById(req.params.student_no)
        res.status(200).send(student)
    } catch (error) {
        res.status(400).send(error)
    }

});

// fetching a specific staff
router.get("/staff/:staff_no", async (req, res) => {
    try {
        const staff = await staffSchema.findById(req.params.staff_no)
        res.status(200).send(staff)
    } catch (error) {
        res.status(400).send(error)
    }

});

// fetching a specific guardian
router.get("/guardians/:guardian_no", async (req, res) => {
    try {
        const guardian = await guardianSchema.findById(req.params.guardian_no)
        res.status(200).send(guardian)
    } catch (error) {
        res.status(400).send(error)
    }

});

// fetching a specific role
router.get("/roles/:role_no", async (req, res) => {
    try {
        const role = await roleSchema.findById(req.params.role_no)
        res.status(200).send(role)
    } catch (error) {
        res.status(400).send(error)
    }

});

// fetching a specific year of study
router.get("/years/:yearOfStudy_no", async (req, res) => {
    try {
        const yearOfStudy = await yearOfStudySchema.findById(req.params.yearOfStudy_no)
        res.status(200).send(yearOfStudy)
    } catch (error) {
        res.status(400).send(error)
    }

});

// fetching a specific overtime
router.get("/overtime/:overtime_id", async (req, res) => {
    try {
        const overtime = await overtimeSchema.findById(req.params.overtime_id)
        res.status(200).send(overtime)
    } catch (error) {
        res.status(400).send(error)
    }

});

// fetching a specific drop/pick
router.get("/dropPick/:dropPick_id", async (req, res) => {
    try {
        const dropPick = await dropPickSchema.findById(req.params.dropPick_id)
        res.status(200).send(dropPick)
    } catch (error) {
        res.status(400).send(error)
    }

});

// fetching a specific setting
router.get("/settings/:settings_no", async (req, res) => {
    try {
        const settings = await settingSchema.findById(req.params.settings_no)
        res.status(200).send(settings)
    } catch (error) {
        res.status(400).send(error)
    }

});


module.exports = router