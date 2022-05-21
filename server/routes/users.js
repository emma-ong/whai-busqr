const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/id/:userid', (req, res) => {
  const userid = req.params.userid
  db.getUserById(userid)
    .then((user) => {
      return res.json(user)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Something went wrong' })
    })
})

router.get('/auth/:authtoken', (req, res) => {
  const authToken = req.params.authtoken
  db.getUserByAuth(authToken)
    .then((user) => {
      return res.json(user)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Something went wrong' })
    })
})

router.post('/update', (req, res) => {
  db.updateUser(req.body)
    .then((user) => {
      return res.json(user)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  db.addUser(req.body)
    .then((user) => {
      return res.json(user)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
