// const knex = require('knex')
// const knexfile = require('./knexfile')
// const connection = knex(knexfile.development)

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUserByAuth,
  getUserById,
  addUser,
  updateUser,
}

function getUserByAuth(authToken, db = connection) {
  return db('users').where('auth', authToken).first()
}

function getUserById(id, db = connection) {
  return db('users')
    .where('id', id)
    .first()
    .select(
      'id',
      'name',
      'location',
      'profile_pic',
      'bio',
      'payment_option_1',
      'payment_option_2',
      'payment_option_3'
    )
}

function addUser(user, db = connection) {
  return db('users')
    .insert(user)
    .then((newUserArr) => {
      return db('users').where('id', newUserArr[0]).first()
    })
}

function updateUser(data, db = connection) {
  return db('users')
    .where({ auth: data.auth })
    .first()
    .update({ ...data })
    .then((userId) => {
      return db('users').where('id', userId).first()
    })
}
