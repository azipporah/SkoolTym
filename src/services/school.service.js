const schoolSchema = require('../models/schools.model')

module.exports = class SchoolService{
    async createSchool(schToCreate){
        const school = new schoolSchema(schToCreate)
        return await school.save()
    }
}