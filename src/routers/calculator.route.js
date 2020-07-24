const router = require('express').Router()
const operationsController = require('../controller/operationsController')

router.use((req, res, next) => {
  const firstData = req.query.first
  const secondData = req.query.second

  if (!firstData) {
    return res.status(400).json({
      message: 'Missing required parameter first'
    })
  }

  if (!secondData) {
    return res.status(400).json({
      message: 'Missing required parameter second'
    })
  }

  const first = parseFloat(firstData)
  const second = parseFloat(secondData)

  if (isNaN(first)) {
    return res.status(400).json({
      message: "The parameter 'first' is not a number"
    })
  }

  if (isNaN(second)) {
    return res.status(400).json({
      message: "The parameter 'second' is not a number"
    })
  }

  req.first = first
  req.second = second

  next()
})

router.get('/add', operationsController.add)
router.get('/sub', operationsController.sub)
router.get('/mul', operationsController.mul)
router.get('/div', operationsController.div)
