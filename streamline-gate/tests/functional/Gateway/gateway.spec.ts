import testUtils from '@adonisjs/core/services/test_utils'
import { test } from '@japa/runner'
import axios from 'axios'

test.group('Gateway gateway', (group) => {

  //group.each.setup(() => testUtils.db().truncate())
  

  // Test that when we receive a request to the gateway endpoint, we should be able to get a response

  test('Ensure we can get a response from the gateway endpoint', async ({assert, client}) => {

    const response = await client.get('/streamline/catalog')


    response.assertStatus(200)

    
    const body = response.body()

    assert.exists(body)

  })

  // Test that when we receive a request to the gateway endpoint, we should be able to get a response
  test('Ensure we can get a response from the gateway endpoint', async ({assert, client}) => {

    const response = await client.get('/streamline/catalog')

    response.assertStatus(200)

    const body = response.body()

    const res = await axios.get('http://localhost:3333/api/v1/catalog')

    const expected = res.data

    assert.deepEqual(body, expected)

  })


  //test concurrent 1000 access to the gateway endpoint, we should be able to get a response
  test('Ensure we can get a response from the gateway endpoint', async ({assert, client}) => {

    for (let i = 0; i < 1000; i++) {
      const response = await client.get('/streamline/catalog')
      response.assertStatus(200)
    }
  })

  



})