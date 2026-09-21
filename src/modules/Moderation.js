'use strict';

const { makeOperation } = require('../core/routeHelper');

class ModerationModule {
  constructor(http) {
    this._http = http;

    // POST v1/moderation
    this.moderate = makeOperation(http, "v1", "POST", "moderation");
  }
}

module.exports = { ModerationModule };
