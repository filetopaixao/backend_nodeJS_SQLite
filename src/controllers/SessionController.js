const connection = require('../database/connection')

module.exports = {
    async create(req, res) {
        const { id } = req.body
        const user = connection('users').where('id', id).select('*').first()

        if(!user){
            return res.status(400).json({ error: "No USER found with this ID" })
        }

        return res.json(user)
    }
}