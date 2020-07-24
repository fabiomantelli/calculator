const router = require('express').Router()

router.use((req, res, next) => {
  const firstData = req.query.first
  const secondData = req.query.second

  if (!firstData) {
    return error(res, {
      status: 400,
      message: "Missing required parameter 'first'"
    })
  }

  if (!secondData) {
    return error(res, {
      status: 400,
      message: "Missing required parameter 'second"
    })
  }

  const first = parseFloat(firstData)
  const second = parseFloat(secondData)

  if (isNaN(first)) {
    return error(res, {
      status: 400,
      message: "The parameter 'first' is not a number"
    })
  }

  if (isNaN(second)) {
    return error({
      status: 400,
      message: "The parameter 'second' is not a number"
    })
  }

  req.first = first
  req.second = second

  next()
})
