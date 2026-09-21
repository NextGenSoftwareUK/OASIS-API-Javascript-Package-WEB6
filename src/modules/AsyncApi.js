'use strict';

const { makeOperation } = require('../core/routeHelper');

class AsyncApiModule {
  constructor(http) {
    this._http = http;

    // GET asyncapi.json
    this.getAsyncApiJson = makeOperation(http, "", "GET", "asyncapi.json");
    // GET asyncapi.yaml
    this.getAsyncApiYaml = makeOperation(http, "", "GET", "asyncapi.yaml");
  }
}

module.exports = { AsyncApiModule };
