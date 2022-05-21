exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('auth').notNullable()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('location').defaultTo('Unknown')
    table
      .string('profile_pic')
      .defaultTo(
        'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
      )
    table.text('bio')
    table.integer('payment_option_1').defaultTo(2)
    table.integer('payment_option_2').defaultTo(5)
    table.integer('payment_option_3').defaultTo(10)
    table.integer('earnings').defaultTo(0)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
