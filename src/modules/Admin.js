'use strict';

const { makeOperation } = require('../core/routeHelper');

class AdminModule {
  constructor(http) {
    this._http = http;

    // GET v1/admin/config
    this.getConfig = makeOperation(http, "v1/admin/config", "GET", "");
    // POST v1/admin/config
    this.setConfig = makeOperation(http, "v1/admin/config", "POST", "");
    // DELETE v1/admin/config
    this.deleteConfig = makeOperation(http, "v1/admin/config", "DELETE", "");
    // POST v1/admin/config/fahrn
    this.configFahrn = makeOperation(http, "v1/admin/config", "POST", "fahrn");
    // POST v1/admin/config/braid
    this.configBraid = makeOperation(http, "v1/admin/config", "POST", "braid");
    // GET v1/admin/config/observed-costs
    this.getObservedCosts = makeOperation(http, "v1/admin/config", "GET", "observed-costs");
    // DELETE v1/admin/config/observed-costs
    this.deleteObservedCosts = makeOperation(http, "v1/admin/config", "DELETE", "observed-costs");
    // GET v1/admin/config/audit
    this.getAudit = makeOperation(http, "v1/admin/config", "GET", "audit");
  }
}

module.exports = { AdminModule };
