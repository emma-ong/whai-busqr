exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('auth_token').notNullable()
    table
      .string('profile_pic')
      .defaultTo(
        'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
      )
    table.enu('type', ['busker', 'supporter'])
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
