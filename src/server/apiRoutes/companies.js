const router = require('express').Router()

const Company = require('../models/Company')

const fetchAll = async (req, res) => {
  const { code } = req.query
  const companies = await Company.find({code})

  return res.json({companies: companies})
}

// Register routes
router.get('/', fetchAll)

module.exports = router
