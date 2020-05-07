const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async(req, res, next) => {
    try {
            const token = req.header('Authorization').replace('Bearer ', '')
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            const user = await User.findOne({'_id': decoded._id, 'tokens.token': token})
            console.log(process.env.JWT_SECRET)

            if (!user) {
                throw new Error('Unknown user')
            }

            req.user = user
            req.token = token
            next()
    }
    catch(e)
    {
        console.log(e)
        res.status(401).send({error: 'Please authenticate'})
    }
}

module.exports = auth