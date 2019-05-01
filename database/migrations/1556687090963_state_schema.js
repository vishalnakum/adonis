'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StateSchema extends Schema {
  up () {
    this.create('states', (table) => {
      table.increments()
      table.string('name')
      table.integer('country_id').unsigned().references('countries.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('states')
  }
}

module.exports = StateSchema
