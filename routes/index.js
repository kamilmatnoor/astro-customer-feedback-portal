var express = require('express')
var router = express.Router()

const UserFileRouter = require('./user')
const ReviewFileRouter = require('./review/')
const DashboardFileRouter = require('./dashboard/')

router.use('/user', UserFileRouter)
router.use('/review', ReviewFileRouter)
router.use('/dashboard', DashboardFileRouter)

module.exports = router
