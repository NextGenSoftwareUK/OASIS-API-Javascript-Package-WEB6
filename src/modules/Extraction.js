'use strict';

const { makeOperation } = require('../core/routeHelper');

class ExtractionModule {
  constructor(http) {
    this._http = http;

    // POST v1/extract
    this.extract = makeOperation(http, "v1", "POST", "extract");
  }
}

module.exports = { ExtractionModule };
