const app = require('express')()
const router = require('./src/routers')

app.use('/calculator', router)
app.listen(8080)

exports.app = app
