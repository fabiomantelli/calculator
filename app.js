const app = require('express')()
const index = require('./src/routers')
const calculatorRouter = require('./src/routers/calculator.route')

app.use(index)
app.use('/calculator', calculatorRouter)
app.listen(8080)

exports.app = app
