'use strict';

const { makeOperation } = require('../core/routeHelper');

class EstimateModule {
  constructor(http) {
    this._http = http;

    // POST v1/estimate
    this.estimate = makeOperation(http, "v1/estimate", "POST", "");
  }
}

module.exports = { EstimateModule };
