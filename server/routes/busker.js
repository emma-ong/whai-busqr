const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/:id', (req, res) => {
  const buskerId = req.params.id
  db.getBuskerById(buskerId)
    .then((data) => {
      return res.json(data)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Something went wrong' })
    })
})

module.exports = router
