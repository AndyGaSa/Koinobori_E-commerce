require('dotenv').config()
const express = require('express')
const debug = require('debug')('sever')
const morgan = require('morgan')

require('./src/config/mongooseConfig')

const server = express()
const port = process.env.PORT || 5000

require('./src/config/passportConfig')

server.use(morgan('dev'))
server.use(express.json())

const router = require('./src/routes/router')

server.use('/', router)

server.listen(port, debug(`sever is running on port ${port}`))