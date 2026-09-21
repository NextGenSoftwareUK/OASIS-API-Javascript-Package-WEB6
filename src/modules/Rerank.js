'use strict';

const { makeOperation } = require('../core/routeHelper');

class RerankModule {
  constructor(http) {
    this._http = http;

    // POST v1/rerank
    this.rerank = makeOperation(http, "v1", "POST", "rerank");
  }
}

module.exports = { RerankModule };
