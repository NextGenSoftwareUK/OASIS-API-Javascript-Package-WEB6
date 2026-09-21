'use strict';

const { makeOperation } = require('../core/routeHelper');

class GuardrailsModule {
  constructor(http) {
    this._http = http;

    // POST v1/guardrails/check
    this.check = makeOperation(http, "v1/guardrails", "POST", "check");
  }
}

module.exports = { GuardrailsModule };
