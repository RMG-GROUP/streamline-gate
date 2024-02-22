/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import redirectionsData from '../app/Utils/redirections.json' assert {type: 'json'}
import axios from 'axios';

// console.log(redirectionsData.redirections);

const data = redirectionsData.redirections

data.forEach(redirection => {
  let BasedUrl = redirection.basedUrl
  // console.log(redirection.wizeco_route);
  router.get(redirection.streamline_route, async ({ params, response }) => {

    try {

      let completeUrl = `${BasedUrl}${redirection.wizeco_route}`
      if (redirection.streamline_route.includes(':id') && params.id) {
        completeUrl = completeUrl.replace(':id', params.id)
      }

      const urlResponse = await axios.get(completeUrl)
      response.send(urlResponse.data)
    } catch (error) {
      response.status(error.response.status).send(error.response.data)
    }





    // try {
    //   console.log("urldeBase:", BasedUrl);
    //   const wizecoResponse = await axios.get(`${BasedUrl}${redirection.wizeco_route}`)
    //   console.log(wizecoResponse.data);

    //   response.send(wizecoResponse.data)
    // } catch (error) {
    //   response.status(error.response.status).send(error.response.data)
    // }

  })
})

// redirections.redirections.foreach((redirection: any) => {
//   router.get(redirection.streamline_route, async ({ params, response }: any) => {
//     const wizecoResponse = await fetch(`${redirection.wizeco_route}`)
//     const data = await wizecoResponse.json()
//     response.send(data)
//   })
// })

// console.log(redirections);



