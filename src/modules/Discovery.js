'use strict';

const { makeOperation } = require('../core/routeHelper');

class DiscoveryModule {
  constructor(http) {
    this._http = http;

    // GET .well-known/mcp.json
    this.getMcpManifest = makeOperation(http, "", "GET", ".well-known/mcp.json");
    // GET .well-known/agent.json
    this.getAgentManifest = makeOperation(http, "", "GET", ".well-known/agent.json");
  }
}

module.exports = { DiscoveryModule };
