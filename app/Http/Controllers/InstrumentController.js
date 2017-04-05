'use strict';

const Instrument = use('App/Model/Instrument');
const attributes = ['name', 'slug'];

class InstrumentController {

  * index(request, response) {
    const instruments = yield Instrument.with('exercises').fetch();

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
    const instrument = yield Instrument.with('exercises').where({ id }).firstOrFail();

    response.jsonApi('Instrument', instrument);
  }

  * update(request, response) {
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
    };

    const instrument = yield Instrument.with('exercises').where({ id }).firstOrFail();
    instrument.fill(Object.assign({}, input, foreignKeys));
    yield instrument.save();

    response.jsonApi('Instrument', instrument);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const instrument = yield Instrument.query().where({ id }).firstOrFail();
    yield instrument.delete();

    response.status(204).send();
  }

}

module.exports = InstrumentController;
