//*  /todos [POST, GET]
//* /todos:id [GET, DELETE, PATCH]

const router = require('express').Router()
const usersServices = require('./users.services')

router.get('/users', usersServices.getAll)

router.post('/users', usersServices.createById )

router.get('/users/:id', usersServices.getById)

router.delete('/users/:id', usersServices.deleteById )

router.patch('/users/:id', usersServices.editUserById )


module.exports = router
