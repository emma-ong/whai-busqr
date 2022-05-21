const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getUserByAuth(authToken, db = connection) {
  return db('users').where('auth', authToken).select()
}

module.exports = {
  getUserByAuth,
}
