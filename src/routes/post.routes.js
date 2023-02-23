const express = require('express')
const router = express.Router()
const {check} = require('express-validator')

// importing models
// const validateSchool = require('../validations/school.validation')
// const studentSchema = require('../models/students.model')
// const staffSchema = require('../models/staff.model')
// const guardianSchema = require('../models/guardians.model')
// const roleSchema = require('../models/roles.model')
// const settingSchema = require('../models/settings.model')

// importing controller files
const schoolController = require('../controllers/sch.controller')
// const schoolController = require('../controllers/school')
const studentController = require('../controllers/student.controller')
const roleController = require('../controllers/roles.controller')
const staffController = require('../controllers/staff.controller')
const guardianController = require('../controllers/guardian.controller')
const yearOfStudyController = require('../controllers/yearOfStudy.controller')
const overtimeController = require('../controllers/overtime.controller')
const pickupController = require('../controllers/pickup.controller')
const dropoffController = require('../controllers/dropoff.controller')
const settingController = require('../controllers/settings.controller')
const staffloginController = require('../controllers/stafflogin.controller')


// schools post route
router.use('school_badge', express.static('./uploads/images/'))
router.post('/schools/create', schoolController.create )

// students post route
router.use('student_profile_pic', express.static('./uploads/images'))
router.post('/students/create', studentController.create)

// roles postroute
router.post('/roles/create', roleController.create)

// staff postroute
router.use('staff_profile_pic', express.static('./uploads/images'))
router.post('/staff/create', staffController.create)

// staff-login
router.post('/login', staffloginController.login )

// guardian postroute
router.use('guardian_profile_pic', express.static('./uploads/images'))
router.post('/guardians/create', guardianController.create)

// yearOfStudy postroute
router.post('/years/create', yearOfStudyController.create)

// overtime postroute
router.post('/overtime/create', overtimeController.create)

// drop-off postroute
router.post('/dropoff/create', dropoffController.create)

// pick-up postroute
router.post('/pickup/create', pickupController.create)

// settings postroute
router.post('/settings/create', settingController.create)

module.exports = router