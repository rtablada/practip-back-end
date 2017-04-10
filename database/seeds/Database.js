'use strict'

/*
|--------------------------------------------------------------------------
| Database Seeder
|--------------------------------------------------------------------------
| Database Seeder can be used to seed dummy data to your application
| database. Here you can make use of Factories to create records.
|
| make use of Ace to generate a new seed
|   ./ace make:seed [name]
|
*/

const Instrument = use('App/Model/Instrument');
const instrumentData = require('./data/instruments');

class DatabaseSeeder {

  * run () {
    for (var i = 0; i < instrumentData.length; i++) {
      const name = instrumentData[i];
      yield Instrument.create({name});
    }
  }

}

module.exports = DatabaseSeeder
