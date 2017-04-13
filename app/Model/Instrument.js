'use strict'

const Lucid = use('Lucid');
const slug = require('slug');

class Instrument extends Lucid {

  static boot () {
    super.boot()

    /**
     * Hashing password before storing to the
     * database.
     */
    this.addHook('beforeCreate', function * (next) {
      this.slug = slug(this.title || '', { lower: true });

      yield next;
    });
  }


  challenges() {
    return this.hasMany('App/Model/Challenge', 'id', 'instrument_id');
  }
}

module.exports = Instrument
