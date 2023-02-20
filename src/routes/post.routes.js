const express = require('express')
const router = express.Router()

// importing models
const schoolSchema = require('../models/schools.model')
const studentSchema = require('../models/students.model')
const staffSchema = require('../models/staff.model')
const guardianSchema = require('../models/guardians.model')
const roleSchema = require('../models/roles.model')
const settingSchema = require('../models/settings.model')

// importing controller files
const schoolController = require('../controllers/sch.controller')
const studentController = require('../controllers/student.controller')
const roleController = require('../controllers/roles.controller')
const staffController = require('../controllers/staff.controller')
const guardianController = require('../controllers/guardian.controller')
// const settingController = require('../controllers/settings.controller')


// schools post route
router.use('school_badge', express.static('./uploads/images/'))
router.post('/schools/create',schoolController.create )

// students post route
router.use('student_profile_pic', express.static('./uploads/images'))
router.post('/students/create', studentController.create)


// roles postroute
// router.use('staff_profile_pic', express.static('./uploads/images'))
router.post('/roles/create', roleController.create)

// staff postroute
router.use('staff_profile_pic', express.static('./uploads/images'))
router.post('/staff/create', staffController.create)

// guardian postroute
router.use('guardian_profile_pic', express.static('./uploads/images'))
router.post('/guardians/create', guardianController.create)


module.exports = router