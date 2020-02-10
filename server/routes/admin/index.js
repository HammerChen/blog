module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const Article = require('../../models/Article')
  const Tag = require('../../models/Tag')

  // 新建文章
  router.post('/articles', async (req, res) => {
    const model = await Article.create(req.body)
    res.send(model)
  })

  // 文章列表
  router.get('/articles', async (req, res) => {
    const items = await Article.find()
      .populate('tags')
      .limit(10)
    res.send(items)
  })

  // 文章详情
  router.get('/articles/:id', async (req, res) => {
    const model = await Article.findById(req.params.id)
    res.send(model)
  })

  // 编辑文章
  router.put('/articles/:id', async (req, res) => {
    const model = await Article.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  // 删除文章
  router.delete('/articles/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })

  // 新建标签
  router.post('/tags', async (req, res) => {
    const model = await Tag.create(req.body)
    res.send(model)
  })

  // 标签列表
  router.get('/tags', async (req, res) => {
    const items = await Tag.find().limit(10)
    res.send(items)
  })

  // 标签详情
  router.get('/tags/:id', async (req, res) => {
    const model = await Tag.findById(req.params.id)
    res.send(model)
  })

  // 编辑标签
  router.put('/tags/:id', async (req, res) => {
    const model = await Tag.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  // 删除标签
  router.delete('/tags/:id', async (req, res) => {
    await Tag.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })

  app.use('/admin/api', router)
}
