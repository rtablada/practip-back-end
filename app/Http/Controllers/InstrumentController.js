 'use strict';

const Instrument = use('App/Model/Instrument');
const attributes = ['title', 'slug'];
const withRelations = [];
// const withRelations = ['challenges'];

class InstrumentController {

  * index(request, response) {
    const instruments = yield Instrument.with(...withRelations).fetch();

    response.jsonApi('Instrument', instruments);
  }

  * store(request, response) {
    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
    };
    const instrument = yield Instrument.create(Object.assign({}, input, foreignKeys));

    response.jsonApi('Instrument', instrument);
  }

  * show(request, response) {
    const id = request.param('id');
    const instrument = yield Instrument.with(...withRelations).where({ slug: id }).firstOrFail();

    response.jsonApi('Instrument', instrument);
  }

  * update(request, response) {
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
    };

    const instrument = yield Instrument.with(...withRelations).where({ slug: id }).firstOrFail();
    instrument.fill(Object.assign({}, input, foreignKeys));
    yield instrument.save();

    response.jsonApi('Instrument', instrument);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const instrument = yield Instrument.query().where({ slug: id }).firstOrFail();
    yield instrument.delete();

    response.status(204).send();
  }

}

module.exports = InstrumentController;
