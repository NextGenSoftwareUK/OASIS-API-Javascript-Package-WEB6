'use strict';

const { makeOperation } = require('../core/routeHelper');

class EmbeddingModule {
  constructor(http) {
    this._http = http;

    // POST v1/embed
    this.embed = makeOperation(http, "v1", "POST", "embed");
  }
}

module.exports = { EmbeddingModule };
