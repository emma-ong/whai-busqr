const express = require('express')
const router = express.Router()
const multer = require('multer')

const db = require('../db')

const path = require('path')

const dest = path.join(__dirname, '..', 'public', 'images')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dest)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

router.get('/id/:userid', (req, res) => {
  const userid = req.params.userid
  db.getUserById(userid)
    .then((user) => {
      return res.send(user)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Something went wrong' })
    })
})

router.get('/auth/:auth0Id', (req, res) => {
  const auth0Id = req.params.auth0Id
  db.getUserByAuth(auth0Id)
    .then((user) => {
      return res.send(user)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ message: 'Something went wrong' })
    })
})

router.post('/update', (req, res) => {
  console.log(' /update req.body', req.body)
  db.updateUser(req.body)
    .then((user) => {
      return res.json(user)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/payment/:buskerId', (req, res) => {
  const buskerId = req.params.buskerId
  const paymentAmount = req.body.amount

  db.payBusker(buskerId, paymentAmount)
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

router.post('/profilepic', upload.single('profile-pic'), (req, res) => {
  return res.send(res.file)
})

module.exports = router
