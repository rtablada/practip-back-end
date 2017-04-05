'use strict'

const Lucid = use('Lucid')

class Instrument extends Lucid {


  exercises() {
    return this.hasMany('App/Model/Exercise', 'id', 'instrument_id');
  }
}

module.exports = Instrument
