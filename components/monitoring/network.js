const express = require('express')
const router = express.Router()
const controller = require('./controller')
const response = require('../../network/response')

router.get('/test', function(req, res, next) {
    let conf = {}

    controller.test(conf)
        .then((message) => {
            response.success(req, res, message, 200)
        })
        .catch(next)
})

module.exports = router
