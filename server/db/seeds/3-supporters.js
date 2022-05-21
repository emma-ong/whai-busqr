exports.seed = async function (knex) {
  await knex('supporters').insert([
    { user_id: 4, history: '$2 to Shed' },
    { user_id: 5, history: '$5 to Frank' },
    { user_id: 6, history: '$10 to Gold' },
  ])
}
