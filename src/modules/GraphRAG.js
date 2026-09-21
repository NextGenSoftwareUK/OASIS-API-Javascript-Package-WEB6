'use strict';

const { makeOperation } = require('../core/routeHelper');

class GraphRAGModule {
  constructor(http) {
    this._http = http;

    // POST v1/graphrag/query
    this.query = makeOperation(http, "v1/graphrag", "POST", "query");
  }
}

module.exports = { GraphRAGModule };
