module.exports = app => {
  const router = require('express').Router()
  const mongoose = require('mongoose')

  const Article = mongoose.model('Article')

  router.get('/articles', async (req, res) => {
    const articles = await Article.find().populate('tags')
    res.send(articles)
  })

  router.get('/articles/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    res.send(article)
  })

  app.use('/web/api', router)
}
