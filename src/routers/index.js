const router = require('express').Router()

router.get('/api', (req, resp) => {
  resp.status(200).send({
    success: 'True',
    message: 'Welcome to API',
    version: '1.0.0'
  })
})
