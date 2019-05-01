'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Country = use('App/Models/Country')
const City = use('App/Models/City')

class State extends Model {

    city () {
        return this.hasMany(City, 'id', 'state_id')
      }
    
    stateCountry () {
      return this.belongsTo(Country, 'country_id', 'id')
    }
}

module.exports = State
