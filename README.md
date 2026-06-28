# web6-oasis-ai-layer-api

Isomorphic (Node 18+ and browser) JavaScript/TypeScript-friendly client for the
**WEB6 OASIS AI Layer API** - full coverage of the OASIS2 WEB6 WebAPI: unified
AI completion/chat across every provider (OpenAI, Anthropic, Google Gemini,
xAI Grok, Qwen, DeepSeek, OpenServ, ...), image generation, the Holonic BRAID
fractal memory hierarchy and shared reasoning-graph library, multi-agent
orchestrator adapters (MCP/A2A/LangChain/AutoGen/CrewAI/Semantic Kernel), and
the Reasoning Network (FAHRN) for agent registration, scoring and dispatch.

Zero dependencies. Wraps the global `fetch`. Works the same in Node and the
browser.

## Installation

```bash
npm install web6-oasis-ai-layer-api
```

## Quick start

```js
const { Web6Client } = require('web6-oasis-ai-layer-api');
// or: import { Web6Client } from 'web6-oasis-ai-layer-api';

const web6 = new Web6Client({ baseUrl: 'https://api.web6.oasisomniverse.one' });

const { isError, message, result } = await web6.completion.complete({
  avatarId,
  messages: [{ role: 'user', content: 'Hello!' }]
});
if (isError) throw new Error(message);
console.log(result);
```

## Calling any endpoint

Every controller on the OASIS2 WEB6 WebAPI is reachable as a lowerCamel
property on the client (`web6.completion`, `web6.images`,
`web6.holonicMemory`, `web6.holonicBraid`, `web6.orchestrator`,
`web6.reasoningNetwork`). Every generated method takes a single args object:

- Any key matching a `{token}` in the route template is consumed and
  substituted into the URL (case-insensitive match).
- Any remaining keys become the query string (GET/DELETE) or JSON body
  (POST/PUT).

```js
// GET v1/holonic-braid/graph/{taskType} -> taskType is consumed as a route token
const graph = await web6.holonicBraid.getGraph({ taskType: 'research' });

// PUT v1/holonic-memory/holons/{holonId}/membrane-rule -> holonId consumed, rest becomes the body
await web6.holonicMemory.setMembraneRule({ holonId, allow: ['propagate-up'] });
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
const holon = await web6.holonicMemory.getOrCreateHolon({ name: 'London', parentHolonId: earth.result.id });
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
