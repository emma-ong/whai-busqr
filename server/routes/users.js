const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/:authtoken', (req, res) => {
  const authToken = req.params.authtoken
  db.getUserByAuth(authToken)
    .then((data) => {
      return res.json(data)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Something went wrong' })
    })
})

module.exports = router