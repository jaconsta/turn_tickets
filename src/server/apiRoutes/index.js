const router = require('express').Router()

const companies = require('./companies')

router.use('/companies', companies)

module.exports = router
