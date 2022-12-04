const express = require('express')

const router = express.Router()
const users = []

router.get('/', (req, res, next) => {
    res.render("home", {
        pageTitle: 'Home',
        path: '/'
    })
})

exports.routes = router
exports.users = users