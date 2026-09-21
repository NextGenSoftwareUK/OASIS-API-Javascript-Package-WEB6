'use strict';

const { makeOperation } = require('../core/routeHelper');

class CodeModule {
  constructor(http) {
    this._http = http;

    // POST v1/code/execute
    this.execute = makeOperation(http, "v1/code", "POST", "execute");
  }
}

module.exports = { CodeModule };
