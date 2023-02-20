const express = require('express')
const multer = require('multer')
const router = express.Router()
const studentSchema = require('../models/students.model')


// multer code
const Storage = multer.diskStorage({
    destination:
        (req, file, cb) => {
            cb(null, './uploads/images/')
        },
    filename: (req, file, cb) => {
        // return cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
        cb(null, file.originalname)
    }
})

// const maxSize = 1 * 1024 * 1024 //1MB
const upload = multer({
    storage: Storage,
    // fileFilter: (req, file, cb) => {
    //     if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
    //         cb(null, true);
    //     } else {
    //         cb(null, false);
    //         return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
    //     }
    // },
    limits: { fileSize: 1000000 }
})
// function for handling multer errors
function errHandler(err, req, res, next) {
    if (err instanceof multer.MulterError) {
        (
            res.json({
                success: 0,
                message: err.message
            })
        )
    }
}

router.use(errHandler)
router.use('student_profile_pic', express.static('./uploads/images'))
module.exports = {
    create: async (req, res, next) => {
        upload.single('student_profile_pic')(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                console.log(`upload.single error: ${err}`);
            } else if (err) {
                res.send(err)
            }
            try {
                const student = {
                    school: req.body.school,
                    student_fname: req.body.student_fname,
                    student_lname: req.body.student_lname,
                    student_contact: req.body.student_contact,
                    student_email: req.body.student_email,
                    student_class: req.body.student_class,
                    student_gender: req.body.student_gender,
                    student_profile_pic: req.file.path
                    
                }

                const newStudent = await studentSchema.create(student)
                newStudent.save()

                return res.send(newStudent)
            } catch (error) {
                res.send(error)
                console.log(error);
            }
        })




    }
}