'use strict'
const Country = use('App/Models/Country')
const City = use('App/Models/City')
class UserController {
    async getCountry({ request, response }) {
        const countries = await Country.query()
          .with('state.city')
          .fetch()
          return countries;
          
    }
    async getCity({ request, response }) {
         const citties = await City.query()
        .with('cityState.stateCountry')
        .fetch()
        return citties;
    }
}

module.exports = UserController
