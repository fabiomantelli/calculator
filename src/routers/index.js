const router = require('express').Router()

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'True',
    message: 'Welcome to API',
    version: '1.0.0'
  })
})

module.exports = router
