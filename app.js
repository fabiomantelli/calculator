const express = require('express')
const cors = require('cors')
const index = require('./src/routers')
const calculatorRouter = require('./src/routers/calculator.route')

const app = express()

app.use(express.json())
app.use(cors())

app.use(index)
app.use('/calculator/', calculatorRouter)

module.exports = app
