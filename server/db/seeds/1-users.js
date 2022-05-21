exports.seed = async function (knex) {
  await knex('users').insert([
    {
      name: 'Frank the Clown',
      email: 'FranktheClown@fakemail.com',
      auth_token: 'auth0|somethingFrank',
      type: 'busker',
    },
    {
      name: 'Shed Eeran',
      email: 'ShedEeran@fakemail.com',
      auth_token: 'auth0|somethingShed',
      type: 'busker',
    },
    {
      name: 'Gold Statue Guy',
      email: 'GoldStatueGuy@fakemail.com',
      auth_token: 'auth0|somethingGold',
      type: 'busker',
    },
    {
      name: 'Simon Cowell',
      email: 'SimonCowell@fakemail.com',
      auth_token: 'auth0|somethingSimon',
      type: 'supporter',
    },
    {
      name: 'Paula Abdul',
      email: 'PaulaAbdul@fakemail.com',
      auth_token: 'auth0|somethingPaula',
      type: 'supporter',
    },
    {
      name: 'Randy Jackson',
      email: 'RandyJackson@fakemail.com',
      auth_token: 'auth0|somethingRandy',
      type: 'supporter',
    },
  ])
}
