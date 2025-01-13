const config = require('./config')
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const errors = require('./network/errors')

const routes = require('./network/routes')

const app = express()

app.use(cors({credentials: true, origin: true})) // no funciona
// solo loggea si la variable de entorno NODE_ENV es PRODUCTION
app.use(logger('dev', { skip: (req, res) => process.env.NODE_ENV === 'PRODUCTION' }))
app.use(express.json()) // para que pueda recibir "body" con formato json
app.use(express.urlencoded({ extended: false }))
app.set('etag', false)
app.disable('x-powered-by')
app.use(express.static('public'))

app.use(routes)
app.use(errors)

module.exports = app
