'use strict';

const { makeOperation } = require('../core/routeHelper');

class ClassificationModule {
  constructor(http) {
    this._http = http;

    // POST v1/classify
    this.classify = makeOperation(http, "v1", "POST", "classify");
  }
}

module.exports = { ClassificationModule };
