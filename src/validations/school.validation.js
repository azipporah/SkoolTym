const Joi = require('joi')
const {validate} = require('express-validation')
// Joi.objectId = require('joi-objectid')(Joi)

const validator = (schema) => (payload) => schema.validate(payload,
    { abortEarly: false })

const schoolschema = Joi.object({
        school_name: Joi.string().required(),
        school_motto: Joi.string().required(),
        student_badge: Joi.string().required(),
        student_address: Joi.string().required(),
        student_contact: Joi.number().min(10).max(14).required(),
        student_about: Joi.string().required(),
        school_key: Joi.string().required(),
    })



exports.validateSchool = validator(schoolschema)
