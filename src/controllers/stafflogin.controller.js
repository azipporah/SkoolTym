const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const staffSchema = require('../models/staff.model')

module.exports = {
    login: async (req, res) => {
        try {
            // var staff_email = req.body.staff_email
            // var staff_password = req.body.staff_password
            let staff = await staffSchema.findOne({ staff_email: req.body.staff_email })
            console.log(staff);
            if (staff) {
                bcrypt.compare(req.body.staff_password, staff.staff_password, async (err, result) => {
                    console.log(req.body.staff_password)
                    console.log(staff.staff_password)
                    if (err) {
                        res.json({ error: err })
                    }
                    else if (result) {
                        let token = jwt.sign({ staff_role: staff.staff_role }, 'verySecretValue', { expiresIn: '1h' })
                        // if (addUser.role === 'admin') {
                        //     res.redirect('/adminPage')
                        //     // window.location.href = 'http://localhost:4040/adminPage';
                        // }
                        // else if (addUser.role === 'hospital') {
                        //     res.redirect('/hospitalPage')
                        //     // window.location.href = 'http://localhost:4040/hospitalPage';
                        // }
                        // else {
                        //     res.redirect('/publicPage');
                        //     // window.location.href = 'http://localhost:4040/publicPage';
                        // }

                        // res.json({
                        //     message: "Login successfull!!",
                        //     token
                        // })
                        res.send(`Login successfull with token: ${token}`);
                    } else {
                        res.json({ message: "Wrong password!!" })
                    }
                })
            } else {
                res.json({ message: "Staff doesn't exists!!" })
            }
            // console.log(staff);
        } catch (error) {
            // res.send(error.message)
            console.log(error);
        }
    }
}