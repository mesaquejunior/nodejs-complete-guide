const { users } = require('./home')

const express = require('express')

const router = express.Router()

router.get('/users', (req, res, next) => {
    res.render('users', {
        pageTitle: 'Users',
        users: users,
        path: '/users'
    })
})

router.post('/users', (req, res, next) => {
    users.push({ name: req.body.user })
    res.redirect("/users")
})

module.exports = router