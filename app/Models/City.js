'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const State = use('App/Models/State')
class City extends Model {
    
    cityState () {
        return this.belongsTo(State, 'state_id', 'id')
    }
}

module.exports = City
