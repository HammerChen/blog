module.exports = app => {
  const express = require('express')
  const assert = require('http-assert')
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../../models/AdminUser')
  const router = express.Router({
    mergeParams: true
  })

  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })

  router.get('/', async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Article') {
      queryOptions.populate = 'tags'
    }
    const items = await req.Model.find().setOptions(queryOptions)
    res.send(items)
  })

  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })

  // 登录校验中间件
  const authMiddleware = require('../../middleware/auth')

  // 资源获取中间件
  const resourceMiddleware = require('../../middleware/resource')

  app.use(
    '/admin/api/rest/:resource',
    authMiddleware(),
    resourceMiddleware(),
    router
  )

  const multer = require('multer')
  const MAO = require('multer-aliyun-oss')
  const upload = multer({
    storage: MAO({
      config: {
        region: process.env.OSS_REGION,
        accessKeyId: process.env.OSS_ACCESS_KEY_ID,
        accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
        bucket: process.env.OSS_BUCKET
      }
    })
  })
  app.post(
    '/admin/api/upload',
    authMiddleware(),
    upload.single('file'),
    async (req, res) => {
      const file = req.file
      res.send(file)
    }
  )

  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    // 1、根据用户名找用户
    const user = await AdminUser.findOne({ username }).select('+password')
    assert(user, 422, '用户不存在')
    // 2、校验密码
    const isValide = require('bcrypt').compareSync(password, user.password)
    assert(isValide, 422, '密码错误')
    // 3、返回token
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send({ token })
  })

  // 错误处理函数
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}
