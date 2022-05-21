exports.up = (knex) => {
  return knex.schema.createTable('supporters', (table) => {
    table.string('user_id').references('users.id')
    table.string('history')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('supporters')
}
