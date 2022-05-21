const express = require('express')

const db = require('../db/index')

const router = express.Router()

router.get('/', (req,res) => {
  db.getUserData()
    .then(users => {
      
      res.json(users)
    })
    .catch(err => console.log(err))
})

module.exports = router;