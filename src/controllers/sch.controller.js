const express = require('express')
const schoolSchema = require('../models/schools.model')
const multer = require('multer')
const router = express.Router()


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
router.use('school_badge', express.static('./uploads/images/'))

module.exports =  {
    create:  async (req,res,next) => {

        upload.single('school_badge')(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                console.log(`upload.single error: ${err}`);
            } else if (err) {
                res.send(err)
            }
            try {
                const school = {
                    school_name: req.body.school_name,
                    school_motto: req.body.school_motto,
                    school_badge: req.file.path,
                    school_address: req.body.school_address,
                    school_contact: req.body.school_contact,
                    school_about: req.body.school_about
                }

                const newSchool = await schoolSchema.create(school)
                newSchool.save()
                    .then(() => {
                        console.log("sch badge saved");
                        res.status(201).send(newSchool)
                    })
            }
            catch (error) {
                // res.status(400).send(error)
                console.log(error);
            }
        })


        // try {
        //     const newSchool = await schoolSchema.create({
        //         school_name: req.body.school_name,
        //         school_motto: req.body.school_motto,
        //         school_badge: req.file.path,
        //         school_address: req.body.school_address,
        //         school_contact: req.body.school_contact,
        //         school_about: req.body.school_about,
        //         // school:req.body.school
        //     })
        //     const school = await newSchool.save()
        
        // return res.send(school)
        // } catch (error) {
        //     res.status(400).send(error)
        //     console.log(error);
        // }

       
    }
}