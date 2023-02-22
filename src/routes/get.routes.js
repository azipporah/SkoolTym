const express = require('express')
const router = express.Router()
const path = require('path')

// importing models/schemas
const schoolSchema = require('../models/schools.model')
const studentSchema = require('../models/students.model')
const staffSchema = require('../models/staff.model')
const guardianSchema = require('../models/guardians.model')
const roleSchema = require('../models/roles.model')
const overtimeSchema = require('../models/overtime.model')
const settingSchema = require('../models/settings.model')
const yearOfStudySchema = require('../models/yearOfStudy.model')
const dropPickSchema = require('../models/dropOff-pickUp.model')

// get all schools
router.get("/schools", async (req, res) => {
    schoolSchema.find().then((schools) => {
        res.status(200).send(schools)
    }).catch((error) => {
        res.status(400).send(error)
    });
});

// get all students
router.get("/students", async (req, res) => {
    studentSchema.find().then((students) => {
        res.status(200).send(students)
    }).catch((error) => {
        res.status(400).send(error)
    });
});

// get all staff
router.get("/staff", async (req, res) => {
    staffSchema.find().then((staff) => {
        res.status(200).send(staff)
    }).catch((error) => {
        res.status(400).send(error)
    });
});

// get all roles
router.get("/roles", async (req, res) => {
    roleSchema.find().then((roles) => {
        res.status(200).send(roles)
    }).catch((error) => {
        res.status(400).send(error)
    });
});

// get all guardians
router.get("/guardians", async (req, res) => {
    guardianSchema.find().then((guardians) => {
        res.status(200).send(guardians)
    }).catch((error) => {
        res.status(400).send(error)
    });
});

// get all years of study
router.get("/years", async (req, res) => {
    yearOfStudySchema.find().then((years) => {
        res.status(200).send(years)
    }).catch((error) => {
        res.status(400).send(error)
    });
});

// get all overtime
router.get("/overtime", async (req, res) => {
    overtimeSchema.find().then((overtime) => {
        res.status(200).send(overtime)
    }).catch((error) => {
        res.status(400).send(error)
    });
});

// get all pickups/dropOffs
router.get("/dropPick", async (req, res) => {
    dropPickSchema.find().then((dropPick) => {
        res.status(200).send(dropPick)
    }).catch((error) => {
        res.status(400).send(error)
    });
});

// get all settings
router.get("/settings", async (req, res) => {
    settingSchema.find().then((settings) => {
        res.status(200).send(settings)
    }).catch((error) => {
        res.status(400).send(error)
    });
});


module.exports = router