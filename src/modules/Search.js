'use strict';

const { makeOperation } = require('../core/routeHelper');

class SearchModule {
  constructor(http) {
    this._http = http;

    // POST v1/search
    this.search = makeOperation(http, "v1", "POST", "search");
  }
}

module.exports = { SearchModule };
