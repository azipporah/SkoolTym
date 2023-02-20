const roleSchema = require('../models/roles.model')

module.exports = {
    create: async(req, res) => {
        const role = {
            role_type: req.body.role_type
        }
        const newRole = await roleSchema.create(role)
        return res.send(newRole)
    }
}