# @oasisomniverse/web6-api

Isomorphic (Node 18+ and browser) JavaScript/TypeScript-friendly client for the
**WEB6 OASIS AI Layer API** - full coverage of the OASIS WEB6 WebAPI: unified
AI completion/chat across every provider (OpenAI, Anthropic, Google Gemini,
xAI Grok, Qwen, DeepSeek, OpenServ, ...), image generation, the Holonic BRAID
fractal memory hierarchy and shared reasoning-graph library, multi-agent
orchestrator adapters (MCP/A2A/LangChain/AutoGen/CrewAI/Semantic Kernel), and
the Reasoning Network (FAHRN) for agent registration, scoring and dispatch.

Zero dependencies. Wraps the global `fetch`. Works the same in Node and the
browser.

## About WEB6

> **"ONE API. EVERY AI."**

WEB6 is the AI layer of the OASIS Omniverse — a single unified endpoint that routes across OpenAI, Anthropic, Google, Meta, Mistral and dozens of other providers with zero per-provider refactoring. What sets it apart from a generic AI proxy is that every request is grounded in real identity and ecosystem context: it layers on top of WEB4 (avatar, karma, data) and WEB5 (cross-world OAPPs, the holon graph), plus proprietary tech like the Holonic BRAID fractal memory hierarchy and FAHRN, a self-optimizing reasoning mesh - making it, provider-for-provider, one of the most contextually rich AI APIs available.

WEB6 is built directly on **[WEB4](https://www.npmjs.com/package/@oasisomniverse/web4-api)** and **[WEB5](https://www.npmjs.com/package/@oasisomniverse/web5-api)**, and is one layer of the wider **[OASIS Omniverse](https://oasisomniverse.one)** (WEB4 through WEB10).

## About The OASIS Omniverse

The OASIS (Open Advanced Sensory Immersion System) is the universal interoperability layer connecting all of WEB2 and WEB3 — every blockchain, database, cloud provider and protocol — into one unified, fault-tolerant API. Rather than picking a single tech stack, the OASIS harnesses the best of every provider (auto-failover, auto-load-balancing, auto-replication) so nothing is ever a single point of failure, and hides the complexity behind one intuitive API so you never need to learn a new stack again — even as underlying tech evolves, your app keeps working with zero changes.

At its core sits one Avatar with one SSO login and one Karma reputation score that travels with you across every app, game and world built on top of it — full transparency and full control over your own data, right down to the field level.

This is the foundation of the OASIS Omniverse: a network of unified layers, WEB4 (identity & unification) through WEB10 (source), each building on the one below to connect blockchains, metaverses, AI, human consciousness and beyond into a single interoperable whole.

👉 See the full ecosystem at **[oasisomniverse.one](https://oasisomniverse.one)**.

## Installation

```bash
npm install @oasisomniverse/web6-api
```

## Quick start

```js
const { Web6Client } = require('@oasisomniverse/web6-api');
// or: import { Web6Client } from '@oasisomniverse/web6-api';

const web6 = new Web6Client({ baseUrl: 'https://api.web6.oasisomniverse.one' });

const { isError, message, result } = await web6.completion.complete({
  avatarId,
  messages: [{ role: 'user', content: 'Hello!' }]
});
if (isError) throw new Error(message);
console.log(result);
```

## Calling any endpoint

Every controller on the OASIS WEB6 WebAPI is reachable as a lowerCamel
property on the client (`web6.completion`, `web6.images`,
`web6.holonicMemory`, `web6.holonicBraid`, `web6.orchestrator`,
`web6.reasoningNetwork`). Every generated method takes a single args object:

- Any key matching a `{token}` in the route template is consumed and
  substituted into the URL (case-insensitive match).
- Any remaining keys become the query string (GET/DELETE) or JSON body
  (POST/PUT) - **matching the real `[FromQuery]`/`[FromBody]` binding of the
  underlying C# action**, not just the HTTP verb. `endpoints.json` records
  exactly which arg names are query-bound per operation (see
  [`docs/`](./docs/README.md) for the per-method breakdown), so a `POST`
  action that binds some params from the query string (like
  `HolonicMemoryController.GetOrCreateHolon`) still sends those on the URL.

```js
// GET v1/holonic-braid/graph/{taskType} -> taskType is consumed as a route token
const graph = await web6.holonicBraid.getGraph({ taskType: 'research' });

// PUT v1/holonic-memory/holons/{holonId}/membrane-rule -> holonId consumed, rest becomes the body
await web6.holonicMemory.setMembraneRule({ holonId, allow: ['propagate-up'] });

// POST v1/holonic-memory/holons -> level/name/parentHolonId are all [FromQuery]
// even though this is a POST, so they're sent on the URL, not as a JSON body
const holon = await web6.holonicMemory.getOrCreateHolon({ level: 'Local', name: 'London', parentHolonId: earthId });
```

Every response has the shape:

```ts
interface OASISResponse<T = any> {
  isError: boolean;
  message: string | null;
  result: T;
  raw: any;
  statusCode: number;
}
```

## Auth

WEB6 is an internal AI layer that sits behind the same OASIS avatar identity
as WEB4/WEB5 - it has no avatar/login endpoints of its own. Reuse a JWT
you've already obtained elsewhere (e.g. from `web4-oasis-api`'s
`client.auth.login()`):

```js
web6.setToken(jwtToken);
```

## Module examples

### Completion (`web6.completion`)

```js
const reply = await web6.completion.complete({
  avatarId,
  provider: 'OpenAI',
  messages: [{ role: 'user', content: 'Summarise this holon graph.' }]
});

const models = await web6.completion.openServModels();
```

### Images (`web6.images`)

```js
const image = await web6.images.generate({ prompt: 'a holonic crystal city at dawn', provider: 'StabilityAI' });
```

### Holonic Memory (`web6.holonicMemory`)

```js
const earth = await web6.holonicMemory.getEarthHolon();
const holon = await web6.holonicMemory.getOrCreateHolon({ level: 'Local', name: 'London', parentHolonId: earth.result.id });
await web6.holonicMemory.recordMemory({ holonId: holon.result.id, content: 'New observation...' });
await web6.holonicMemory.propagate({ childHolonId: holon.result.id });
```

### Holonic BRAID (`web6.holonicBraid`)

```js
const graph = await web6.holonicBraid.getGraph({ taskType: 'research' });
await web6.holonicBraid.saveGraph({ taskType: 'research', nodes: graph.result.nodes });
```

### Orchestrator (`web6.orchestrator`)

```js
await web6.orchestrator.registerAdapter({ protocol: 'MCP', endpoint: 'https://my-agent.example.com' });
const adapters = await web6.orchestrator.getAdapters();
await web6.orchestrator.invoke({ adapterId, payload: { task: 'lookup-weather' } });
```

### Reasoning Network (`web6.reasoningNetwork`)

```js
await web6.reasoningNetwork.registerAgent({ name: 'researcher-1', capabilities: ['search', 'summarise'] });
await web6.reasoningNetwork.seedOpenServAgents();
const result = await web6.reasoningNetwork.dispatch({ taskType: 'research', payload: { query: 'OASIS HyperDrive' } });
```

## Module reference

6 modules, 18 operations in total. Full per-method tables live in
[`docs/`](./docs/README.md).

| Client property | Route prefix | Operations |
| --- | --- | --- |
| `web6.completion` | `v1` | 2 |
| `web6.holonicBraid` | `v1/holonic-braid` | 2 |
| `web6.holonicMemory` | `v1/holonic-memory` | 5 |
| `web6.images` | `v1/images` | 1 |
| `web6.orchestrator` | `v1/orchestrators` | 3 |
| `web6.reasoningNetwork` | `v1/reasoning-network` | 4 |

See [`docs/README.md`](./docs/README.md) for the full generated reference,
or [`docs/modules/`](./docs/modules) for per-module method tables with
parameter and route details.

## Regenerating

The generated modules, type declarations and docs are produced from
`endpoints.json` (extracted from the WEB6 WebAPI controller source):

```bash
npm run generate   # src/modules/*.js + src/modules/index.js
npm run types      # src/modules/*.d.ts + index.d.ts + src/core/types.d.ts
npm run docs       # docs/README.md + docs/modules/*.md
```

## Testing

```bash
npm test
```

## License

MIT
