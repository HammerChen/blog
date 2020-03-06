const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    content: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Article', schema)
