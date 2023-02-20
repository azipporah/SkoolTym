const {validate} = require('express-validation')
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)


const studentValidation = function validate(req){
    const schema = Joi.object().keys({
        student_fname: Joi.string().required(),
        student_lname: Joi.string().required(),
        student_contact: Joi.number().required(),
        student_email: Joi.string().required(),
        student_gender: Joi.string().required(),
        student_profile_pic: Joi.string().required(),
        school: Joi.objectId().required()
    })
    return Joi.validate(req, schema); 
}

// const studentValidation = {
//     createOrUpdateStudentValidator : {
//         body: Joi.object({
//             student_fname: Joi.string().required(),
//             student_lname: Joi.string().required(),
//             student_contact: Joi.number().required(),
//             student_email: Joi.string().required(),
//             student_gender: Joi.string().required(),
//             student_profile_pic: Joi.string().required(),
//             school: Joi.objectId().required()
//         })
//     }
// }

module.exports = studentValidation
