'use strict';

const { makeOperation } = require('../core/routeHelper');

class MemoryModule {
  constructor(http) {
    this._http = http;

    // POST v1/memory/store
    this.store = makeOperation(http, "v1/memory", "POST", "store");
    // POST v1/memory/query
    this.query = makeOperation(http, "v1/memory", "POST", "query");
  }
}

module.exports = { MemoryModule };
