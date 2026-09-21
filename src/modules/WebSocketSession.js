'use strict';

const { makeOperation } = require('../core/routeHelper');

class WebSocketSessionModule {
  constructor(http) {
    this._http = http;

    // GET v1/ws/session
    this.getSession = makeOperation(http, "v1", "GET", "ws/session");
  }
}

module.exports = { WebSocketSessionModule };
