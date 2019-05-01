'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const State = use('App/Models/State')
class Country extends Model {
    state () {
        return this.hasMany(State, 'id', 'country_id')
      }
}

module.exports = Country
