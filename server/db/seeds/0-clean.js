exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('supporters').del()
  await knex('buskers').del()
  await knex('users').del()
}
