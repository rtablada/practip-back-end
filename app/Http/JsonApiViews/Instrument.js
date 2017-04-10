const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Instrument extends JsonApiView {
  get attributes() {
    return ['title', 'slug'];
  }

  get primaryKey() {
    return 'slug';
  }

  // exercises() {
  //   return this.hasMany('App/Http/JsonApiViews/Challenge', {
  //     included: true,
  //     excludeRelation: 'instrument'
  //   });
  // }

}

module.exports = Instrument;
