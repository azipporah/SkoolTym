const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const schoolValidation = {
    createOrUpdateSchoolValidator : {
        body: Joi.object({
            school_name: Joi.string().required(),
            school_motto: Joi.string().required(),
            student_badge: Joi.string().required(),
            student_address: Joi.string().required(),
            student_contact: Joi.number().required(),
            student_about: Joi.string().required()
        })
    }
}

module.exports = schoolValidation
