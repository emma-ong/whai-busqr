// const knex = require('knex')
// const knexfile = require('./knexfile')
// const connection = knex(knexfile.development)

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)


module.exports = {
  getUserByAuth
}

function getUserByAuth(authToken, db = connection) {
  return db('users').where('auth', authToken).select()
}

