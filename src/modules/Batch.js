'use strict';

const { makeOperation } = require('../core/routeHelper');

class BatchModule {
  constructor(http) {
    this._http = http;

    // POST v1/batch/submit
    this.submitBatch = makeOperation(http, "v1/batch", "POST", "submit");
    // GET v1/batch/{batchId}/status
    this.getBatchStatus = makeOperation(http, "v1/batch", "GET", "{batchId}/status");
  }
}

module.exports = { BatchModule };
