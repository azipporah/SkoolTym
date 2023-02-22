const express = require('express')
const multer = require('multer')
const router = express.Router()
const guardianSchema = require('../models/guardians.model')


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
router.use('guardian_profile_pic', express.static('./uploads/images'))
module.exports = {
    create: async (req, res, next) => {
        upload.single('guardian_profile_pic')(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                console.log(`upload.single error: ${err}`);
            } else if (err) {
                res.send(err)
            }
            try {
                const guardian = {
                    // school: req.body.school,
                    student: req.body.student,
                    relationship: req.body.relationship,
                    guardian_fname: req.body.guardian_fname,
                    guardian_lname: req.body.guardian_lname,
                    guardian_contact: req.body.guardian_contact,
                    guardian_email: req.body.guardian_email,
                    guardian_gender: req.body.guardian_gender,
                    guardian_profile_pic: req.file.path,
                    guardian_dateOfEntry: req.body.guardian_dateOfEntry,
                    guardian_key: req.body.guardian_key
                }

                const newGuardian = await guardianSchema.create(guardian)
                newGuardian.save().then(() => {res.status(201).send(newGuardian)})

            } catch (error) {
                // console.log(newGuardian);
            res.status(400).send(error.message)
            }
        })
    }
}