const roleSchema = require('../models/roles.model')

module.exports = {
    create: async(req, res) => {

       try {
        const role = {
            role_type: req.body.role_type,
            role_key: req.body.role_key
        }
        const newRole = await roleSchema.create(role)
        return res.send(newRole)
        // console.log(newRole);
       } catch (error) {
        res.status(400).send(error.message)
       }
    }
}