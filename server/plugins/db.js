module.exports = app => {
  const mongoose = require('mongoose')
  mongoose.connect('mongodb://localhost:32768/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
}
