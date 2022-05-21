const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getBuskerById(buskerId, db = connection) {
  return db('buskers')
    .join('users', 'buskers.user_id', 'users.id')
    .where('buskers.user_id', buskerId)
    .first()
    .select(
      'users.id as id',
      'users.name as name',
      'users.profile_pic as profile_pic',
      'buskers.payment_option_1 as payment_option_1',
      'buskers.payment_option_2 as payment_option_2',
      'buskers.payment_option_3 as payment_option_3'
    )
}

module.exports = {
  getBuskerById,
}
