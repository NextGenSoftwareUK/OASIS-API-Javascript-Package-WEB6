'use strict';

const { makeOperation } = require('../core/routeHelper');

class PromptModule {
  constructor(http) {
    this._http = http;

    // POST v1/prompts/optimise
    this.optimise = makeOperation(http, "v1/prompts", "POST", "optimise");
  }
}

module.exports = { PromptModule };
