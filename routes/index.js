var express = require('express')
var router = express.Router()

const UserFileRouter = require('./user')
const ReviewFileRouter = require('./review/')

router.use('/user', UserFileRouter)
router.use('/review', ReviewFileRouter)

module.exports = router
