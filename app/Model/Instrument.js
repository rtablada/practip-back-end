'use strict'

const Lucid = use('Lucid')

class Instrument extends Lucid {


  challenges() {
    return this.hasMany('App/Model/Challenge', 'id', 'instrument_id');
  }
}

module.exports = Instrument
