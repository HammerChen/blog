module.exports = app => {
  const mongoose = require('mongoose')
  mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })

  require('require-all')(__dirname + '/../models')
}
