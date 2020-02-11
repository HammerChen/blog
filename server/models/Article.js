const mongoose = require('mongoose')
const Tag = require('./Tag')

const schema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    tags: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Tag' }],
    content: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Article', schema)
