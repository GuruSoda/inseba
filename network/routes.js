const express = require('express');
const routes = express.Router();

const cluster = require('../components/cluster/network')
const logging = require('../components/logging/network')
const monitoring = require('../components/monitoring/network')

routes.use('/cluster', cluster)
routes.use('/logging', logging)
routes.use('/monitoring', monitoring)

module.exports = routes
