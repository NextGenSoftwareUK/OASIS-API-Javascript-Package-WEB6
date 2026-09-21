'use strict';

const { makeOperation } = require('../core/routeHelper');

class TranslationModule {
  constructor(http) {
    this._http = http;

    // POST v1/translate
    this.translate = makeOperation(http, "v1", "POST", "translate");
  }
}

module.exports = { TranslationModule };
