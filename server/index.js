const express = require('express')

const app = express()

require('dotenv').config()

app.set('secret', process.env.SECRET)

app.use(require('cors')())
app.use(express.json())

app.use('/admin', express.static(__dirname + '/admin'))
app.use('/', express.static(__dirname + '/web'))

require('./plugins/db')(app)
require('./routes/admin')(app)

const PORT = process.env.ADMIN_PORT

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
