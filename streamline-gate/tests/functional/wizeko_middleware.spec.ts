// import { test } from '@japa/runner'

// test.group('Wizeko middleware', () => {
//   test('example test', async ({ assert }) => {
//   })
// })
import { test } from '@japa/runner'


test.group('Wizeco Catalog', () => {
  test('List of all item from wizeco catalog', ({ client }) => {
    const response = await client.get('/')
  })
})