const mongoose = require('mongoose')
require('./Tag')

const schema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    content: { type: String },
    tags: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Tag' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Article', schema)
