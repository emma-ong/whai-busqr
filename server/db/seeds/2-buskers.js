exports.seed = async function (knex) {
  await knex('buskers').insert([
    {
      user_id: 1,
      bio: "Hi I'm Frank the Clown, previously Frank the Tour Guide but then Covid happened",
      qr_code: 'https://frank.qrcode.png',
    },
    {
      user_id: 2,
      bio: 'It took me a long time to forgive my parents for naming me Shed',
      qr_code: 'https://shed.qrcode.png',
    },
    {
      user_id: 3,
      bio: '*is completely still*',
      qr_code: 'https://gold.qrcode.png',
    },
  ])
}
