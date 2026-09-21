'use strict';

const { makeOperation } = require('../core/routeHelper');

class VideoModule {
  constructor(http) {
    this._http = http;

    // POST v1/video/generate
    this.generate = makeOperation(http, "v1/video", "POST", "generate");
  }
}

module.exports = { VideoModule };
