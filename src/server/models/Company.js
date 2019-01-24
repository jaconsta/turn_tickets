const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
  name: String,
  code: String
})

module.exports = mongoose.model('Company', companySchema)
