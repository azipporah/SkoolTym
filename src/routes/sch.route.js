const express = require('express')
const router = express.Router()
const {validate} = require('express-validation')
const SchoolController = require('../controllers/sch.controller')
const schoolController = new SchoolController()
const schoolValidator = require('../validations/school.validation')

router.post('/newschools', validate(schoolValidator.createOrUpdateSchoolValidator),schoolController.createSchool)

module.exports = router
