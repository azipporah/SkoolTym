const yearOfStudySchema = require('../models/yearOfStudy.model')

module.exports = {
    create: async (req,res) => {
        try {
            const yearOfStudy = {
                current_year : req.body.current_year,
                current_class : req.body.current_class,
                current_stream : req.body.current_stream,
                addedBy : req.body.addedBy,
                year_key: req.body.year_key
            }
            const newYearOfStudy = await yearOfStudySchema.create(yearOfStudy)
            
            newYearOfStudy.save().then(() => {res.status(200).send(newYearOfStudy)})
            // return res.send(newYearOfStudy)
            // console.log(newYearOfStudy)

        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}