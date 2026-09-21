'use strict';

const { makeOperation } = require('../core/routeHelper');

class KeysModule {
  constructor(http) {
    this._http = http;

    // POST v1/keys
    this.createKey = makeOperation(http, "v1/keys", "POST", "");
    // GET v1/keys
    this.getKeys = makeOperation(http, "v1/keys", "GET", "");
    // DELETE v1/keys/{provider}
    this.deleteKey = makeOperation(http, "v1/keys", "DELETE", "{provider}");
  }
}

module.exports = { KeysModule };
