const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Instrument extends JsonApiView {
  get attributes() {
    return ['name', 'slug'];
  }

  exercises() {
    return this.hasMany('App/Http/JsonApiViews/Exercise', {
      included: true,
      excludeRelation: 'instrument'
    });
  }

}

module.exports = Instrument;
