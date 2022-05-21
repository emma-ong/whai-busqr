const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const db = require('../index')

const testUser = {
  id: 4,
  auth: 'test-oauth2|gobblebobbledingdong',
  name: 'Terry Testerson',
  email: 'terry@fakemail.com',
  location: 'End of the Rainbow',
  profile_pic:
    'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
  bio: 'My name is Terry, I was made in a lab for the sole purpose of being a test for the busqr app',
  payment_option_1: 50,
  payment_option_2: 500,
  payment_option_3: 1000,
}

const testUpdateData = {
  id: 1,
  name: 'Amazing Frank',
  email: 'FranktheClown@fakemail.com',
  location: 'London',
  bio: 'I have been recruited into the league of extraordinary clowns',
  payment_option_1: 50,
  payment_option_2: 100,
  payment_option_3: 200,
  auth: 'auth0|somethingFrank',
}

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getUserByAuth', () => {
  it('match provided auth token to users table and return all fields', () => {
    return db.getUserByAuth('auth0|somethingShed', testDb).then((user) => {
      expect(Object.keys(user)).toHaveLength(11)
      expect(user.name).toBe('Shed Eeran')
    })
  })
})

describe('getUserById', () => {
  it('match provided id number to users table and return selected fields', () => {
    return db.getUserById(3, testDb).then((user) => {
      expect(Object.keys(user)).toHaveLength(8)
      expect(user.bio).toContain('completely')
    })
  })
})

describe('addUser', () => {
  it('inserts new user object into users table', () => {
    return db.addUser(testUser, testDb).then((user) => {
      expect(Object.keys(user)).toHaveLength(11)
      expect(user.email).toBe('terry@fakemail.com')
    })
  })
})

describe('updateUser', () => {
  it('updates users table with provided updateData object', () => {
    return db.updateUser(testUpdateData, testDb).then((user) => {
      expect(Object.keys(user)).toHaveLength(11)
      expect(user.payment_option_3).toBe(200)
      expect(user.bio).toContain('extraordinary')
    })
  })
})
