const express = require('express')
const router = express.Router()
const multer = require('multer')

const db = require('../db')

const path = require('path')

const dest = path.join(__dirname, '..', 'public', 'images')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dest )
  },
  filename: function (req, file, cb){
    cb(null, file.originalname)
  }
})

const upload = multer({storage: storage})


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

router.get('/auth/:authtoken', (req, res) => {
  const authToken = req.params.authtoken
  db.getUserByAuth(authToken)
    .then((user) => {
      return res.send(user)
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

router.post('/profilepic', upload.single('profile-pic'), (req, res) => {
  return res.send(res.file)
 
})

module.exports = router
