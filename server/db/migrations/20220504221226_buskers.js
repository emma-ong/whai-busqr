exports.up = (knex) => {
  return knex.schema.createTable('buskers', (table) => {
    table.string('user_id').references('users.id')
    table.string('bio')
    table.string('qr_code')
    table.integer('payment_option_1').defaultTo(2)
    table.integer('payment_option_2').defaultTo(5)
    table.integer('payment_option_3').defaultTo(10)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('buskers')
}
