'use strict';

const { makeOperation } = require('../core/routeHelper');

class ContextModule {
  constructor(http) {
    this._http = http;

    // GET v1/context/avatar/{avatarId}
    this.getAvatarContext = makeOperation(http, "v1/context", "GET", "avatar/{avatarId}");
  }
}

module.exports = { ContextModule };
