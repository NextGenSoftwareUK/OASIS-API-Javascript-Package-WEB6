'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { Web6Client } = require('../index.js');

function fakeFetch(responses) {
  const calls = [];
  const impl = async (url, init) => {
    calls.push({ url, init });
    const match = responses.find((r) => url.includes(r.match));
    const body = match ? match.body : { isError: false, result: {} };
    return {
      ok: match ? match.ok !== false : true,
      status: match?.status || 200,
      text: async () => JSON.stringify(body)
    };
  };
  impl.calls = calls;
  return impl;
}

test('setToken attaches Bearer header to subsequent requests', async () => {
  const fetchImpl = fakeFetch([{ match: 'v1/complete', body: { isError: false, result: { message: 'hi' } } }]);
  const web6 = new Web6Client({ baseUrl: 'https://example.test', persistSession: false, fetchImpl });

  web6.setToken('jwt-abc');
  await web6.completion.complete({ avatarId: 'a1', messages: [] });

  const call = fetchImpl.calls[0];
  assert.equal(call.init.headers.Authorization, 'Bearer jwt-abc');
  assert.equal(call.url, 'https://example.test/v1/complete');
  assert.equal(call.init.method, 'POST');
});

test('route tokens are consumed from the URL, remaining args become the body', async () => {
  const fetchImpl = fakeFetch([{ match: 'v1/holonic-braid/graph/research', body: { isError: false, result: {} } }]);
  const web6 = new Web6Client({ baseUrl: 'https://example.test', persistSession: false, fetchImpl });

  await web6.holonicBraid.saveGraph({ taskType: 'research', nodes: [] });

  const call = fetchImpl.calls[0];
  assert.equal(call.url, 'https://example.test/v1/holonic-braid/graph/research');
  assert.equal(call.init.method, 'POST');
  const body = JSON.parse(call.init.body);
  assert.deepEqual(body, { nodes: [] });
});

test('GET requests send remaining args as query string', async () => {
  const fetchImpl = fakeFetch([{ match: 'v1/holonic-braid/graph/research', body: { isError: false, result: {} } }]);
  const web6 = new Web6Client({ baseUrl: 'https://example.test', persistSession: false, fetchImpl });

  await web6.holonicBraid.getGraph({ taskType: 'research' });

  const call = fetchImpl.calls[0];
  assert.equal(call.url, 'https://example.test/v1/holonic-braid/graph/research');
  assert.equal(call.init.method, 'GET');
});

test('FromQuery params on a POST action are sent on the URL, not the body', async () => {
  const fetchImpl = fakeFetch([{ match: 'v1/holonic-memory/holons', body: { isError: false, result: { id: 'h1' } } }]);
  const web6 = new Web6Client({ baseUrl: 'https://example.test', persistSession: false, fetchImpl });

  // GetOrCreateHolon(level, name, parentHolonId) are all [FromQuery] despite being a POST action.
  await web6.holonicMemory.getOrCreateHolon({ level: 'Local', name: 'London', parentHolonId: 'earth-1' });

  const call = fetchImpl.calls[0];
  assert.equal(call.init.method, 'POST');
  assert.equal(call.init.body, undefined);
  assert.match(call.url, /^https:\/\/example\.test\/v1\/holonic-memory\/holons\?/);
  assert.match(call.url, /level=Local/);
  assert.match(call.url, /name=London/);
  assert.match(call.url, /parentHolonId=earth-1/);
});

test('missing required route param throws a clear error', async () => {
  const web6 = new Web6Client({ baseUrl: 'https://example.test', persistSession: false, fetchImpl: fakeFetch([]) });
  await assert.rejects(() => web6.holonicMemory.setMembraneRule({}), /Missing required route parameter "holonId"/);
});

test('all 6 generated modules are attached to the client', () => {
  const web6 = new Web6Client({ baseUrl: 'https://example.test', persistSession: false, fetchImpl: fakeFetch([]) });
  const expectedModules = [
    'completion', 'holonicBraid', 'holonicMemory', 'images', 'orchestrator', 'reasoningNetwork'
  ];
  assert.equal(expectedModules.length, 6);
  for (const name of expectedModules) {
    assert.ok(web6[name], `expected web6.${name} to be attached`);
  }
});

test('setBaseUrl updates the underlying http client', async () => {
  const fetchImpl = fakeFetch([{ match: 'v1/images/generate', body: { isError: false, result: { url: 'x' } } }]);
  const web6 = new Web6Client({ baseUrl: 'https://example.test', persistSession: false, fetchImpl });

  web6.setBaseUrl('https://other.test');
  await web6.images.generate({ prompt: 'a cat' });

  assert.equal(fetchImpl.calls[0].url, 'https://other.test/v1/images/generate');
});
