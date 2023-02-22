const express = require('express')
const multer = require('multer')
const router = express.Router()
const staffSchema = require('../models/staff.model')


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
router.use('staff_profile_pic', express.static('./uploads/images'))
module.exports = {
    create: async (req, res, next) => {
        upload.single('staff_profile_pic')(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                console.log(`upload.single error: ${err}`);
            } else if (err) {
                res.send(err)
            }
            try {
                const staff = {
                    staff_school: req.body.staff_school,
                    staff_fname: req.body.staff_fname,
                    staff_lname: req.body.staff_lname,
                    staff_contact: req.body.staff_contact,
                    staff_email: req.body.staff_email,
                    staff_role: req.body.staff_role,
                    staff_gender: req.body.staff_gender,
                    staff_profilePic:req.file.path,
                    staff_password: req.body.staff_password,
                    confirm_password: req.body.confirm_password,
                    staff_key: req.body.staff_key
                }

                const newStaff = await staffSchema.create(staff)
                newStaff.save()

                return res.send(newStaff)
            } catch (error) {
                res.status(400).send(error.message)
            }
        })




    }
}