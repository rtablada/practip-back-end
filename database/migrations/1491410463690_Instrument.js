'use strict';

const Schema = use('Schema');

class InstrumentSchema extends Schema {

  up() {
    this.create('instruments', (table) => {
      table.increments();
      table.string('title');
      table.string('slug');

      table.timestamps();
    });
  }

  down() {
    this.drop('instruments');
  }

}

module.exports = InstrumentSchema;
