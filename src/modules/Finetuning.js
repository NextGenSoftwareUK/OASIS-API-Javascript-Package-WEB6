'use strict';

const { makeOperation } = require('../core/routeHelper');

class FinetuningModule {
  constructor(http) {
    this._http = http;

    // POST v1/fine-tuning/jobs
    this.createJob = makeOperation(http, "v1/fine-tuning", "POST", "jobs");
    // GET v1/fine-tuning/jobs/{jobId}
    this.getJob = makeOperation(http, "v1/fine-tuning", "GET", "jobs/{jobId}");
  }
}

module.exports = { FinetuningModule };
