exports.seed = async function (knex) {
  await knex('users').insert([
    {
      id: 1,
      auth: 'auth0|somethingFrank',
      name: 'Frank the Clown',
      email: 'FranktheClown@fakemail.com',
      location: 'Hastings, Hawkes Bay',
      bio: "Hi I'm Frank the Clown, previously Frank the Tour Guide but then Covid happened",
    },
    {
      id: 2,
      auth: 'auth0|somethingShed',
      name: 'Shed Eeran',
      email: 'ShedEeran@fakemail.com',
      location: 'Lower Hutt, Wellington',
      bio: 'It took me a long time to forgive my parents for naming me Shed',
    },
    {
      id: 3,
      auth: 'auth0|somethingGold',
      name: 'Gold Statue Guy',
      email: 'GoldStatueGuy@fakemail.com',
      location: 'Auckland CBD',
      bio: '*is completely still*',
    },
  ])
}
