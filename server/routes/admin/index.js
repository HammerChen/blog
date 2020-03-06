module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const Article = require('../../models/Article')

  router.post('/articles', async (req, res) => {
    const model = await Article.create(req.body)
    res.send(model)
  })

  router.get('/articles', async (req, res) => {
    const items = await Article.find().limit(10)
    res.send(items)
  })

  app.use('/admin/api', router)
}
