'use strict';

const { makeOperation } = require('../core/routeHelper');

class OpenAICompatModule {
  constructor(http) {
    this._http = http;

    // POST v1/chat/completions
    this.chatCompletions = makeOperation(http, "v1", "POST", "chat/completions");
  }
}

module.exports = { OpenAICompatModule };
