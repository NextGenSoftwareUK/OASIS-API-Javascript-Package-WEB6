'use strict';

const { HttpClient, DEFAULT_BASE_URL } = require('./core/httpClient');
const { TokenStore } = require('./core/tokenStore');
const { attachGeneratedModules } = require('./modules/index');

/**
 * Main SDK entry point. Works in Node 18+ and any modern browser.
 *
 *   const { Web6Client } = require('web6-oasis-ai-layer-api');
 *   const web6 = new Web6Client({ baseUrl: 'https://api.web6.oasisomniverse.one' });
 *   web6.setToken(jwtToken); // reuse a WEB4 OASIS JWT - WEB6 has no auth of its own
 *   const { result } = await web6.completion.complete({ avatarId, messages: [...] });
 *
 * Every controller on the WEB6 AI Layer WebAPI is reachable as a lowerCamel
 * property (web6.completion, web6.images, web6.holonicMemory, web6.holonicBraid,
 * web6.orchestrator, web6.reasoningNetwork). Generated methods take a single
 * args object; route template tokens (e.g. {taskType}) are consumed from it
 * automatically, remaining keys become the query string (GET/DELETE) or JSON
 * body (POST/PUT).
 */
class Web6Client {
  constructor({ baseUrl = DEFAULT_BASE_URL, persistSession, fetchImpl } = {}) {
    this.tokenStore = new TokenStore({ persist: persistSession });
    this.http = new HttpClient({ baseUrl, tokenStore: this.tokenStore, fetchImpl });

    attachGeneratedModules(this, this.http);
  }

  setBaseUrl(baseUrl) {
    this.http.setBaseUrl(baseUrl);
  }

  /**
   * WEB6 is an internal AI layer sitting behind the same OASIS identity as
   * WEB4/WEB5 - it has no avatar/auth endpoints of its own. Reuse a JWT you
   * already obtained from the WEB4 OASIS API (or your own backend) here.
   */
  setToken(jwtToken, sessionExtras = {}) {
    this.tokenStore.setSession({ ...sessionExtras, jwtToken });
  }
}

module.exports = { Web6Client, HttpClient, TokenStore, DEFAULT_BASE_URL };
module.exports.default = Web6Client;
