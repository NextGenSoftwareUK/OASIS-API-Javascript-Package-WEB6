'use strict';

const { makeOperation } = require('../core/routeHelper');

class DocumentsModule {
  constructor(http) {
    this._http = http;

    // POST v1/documents/parse
    this.parseDocument = makeOperation(http, "v1/documents", "POST", "parse");
  }
}

module.exports = { DocumentsModule };
