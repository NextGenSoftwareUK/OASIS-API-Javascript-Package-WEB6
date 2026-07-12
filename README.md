# @oasisomniverse/web6-api

- [@oasisomniverse/web6-api](#oasisomniverseweb6-api)
  - [About WEB 6](#about-web-6)
  - [About The OASIS Omniverse](#about-the-oasis-omniverse)
  - [Benefits Of Building On The WEB 6 AI Layer API](#benefits-of-building-on-the-web-6-ai-layer-api)
  - [WEB 6 AI Layer API Packages](#web-6-ai-layer-api-packages)
    - [Javascript](#javascript)
    - [C#](#c)
  - [Do You Want To Get Involved?](#do-you-want-to-get-involved)
  - [Installation](#installation)
  - [Quick start](#quick-start)
  - [Calling any endpoint](#calling-any-endpoint)
  - [Auth](#auth)
  - [Module examples](#module-examples)
  - [Module reference](#module-reference)
  - [Regenerating](#regenerating)
  - [Testing](#testing)  - [Troubleshooting](#troubleshooting)
  - [License](#license)

Isomorphic (Node 18+ and browser) JavaScript/TypeScript client for the
**WEB 6 OASIS AI Layer API v2.0** — 14 modules, 40 operations.

**v2.0 adds:** FAHRN hero `/solve` endpoint (full pipeline in one call), embeddings,
DID/Verifiable Credentials, external memory providers (Mem0, Zep, Letta, LangMem,
Graphiti), holonic memory semantic search & multi-hop propagation, ML.NET in-process
task classification & sentiment, real-time telemetry history, provider health status,
per-avatar usage metering, A2A task protocol, and budget estimation.

Zero dependencies. Wraps the global `fetch`. Works the same in Node and the browser.

## About WEB 6

> **"ONE API. EVERY AI."**

WEB 6 is the AI layer of the OASIS Omniverse — a single unified endpoint that routes across OpenAI, Anthropic, Google, Meta, Mistral and dozens of other providers with zero per-provider refactoring. What sets it apart from a generic AI proxy is that every request is grounded in real identity and ecosystem context: it layers on top of WEB 4 (avatar, karma, data) and WEB 5 (cross-world OAPPs, the holon graph), plus proprietary tech like the Holonic BRAID fractal memory hierarchy and FAHRN, a self-optimizing reasoning mesh - making it, provider-for-provider, one of the most contextually rich AI APIs available.

WEB 6 is built directly on **[WEB 4](https://www.npmjs.com/package/@oasisomniverse/web4-api)** and **[WEB 5](https://www.npmjs.com/package/@oasisomniverse/web5-api)**, and is one layer of the wider **[OASIS Omniverse](https://oasisomniverse.one)** (WEB 4 through WEB 10).

## About The OASIS Omniverse

The OASIS (Open Advanced Sensory Immersion System) is the universal interoperability layer connecting all of WEB2 and WEB3 — every blockchain, database, cloud provider and protocol — into one unified, fault-tolerant API. Rather than picking a single tech stack, the OASIS harnesses the best of every provider (auto-failover, auto-load-balancing, auto-replication) so nothing is ever a single point of failure, and hides the complexity behind one intuitive API so you never need to learn a new stack again — even as underlying tech evolves, your app keeps working with zero changes.

At its core sits one Avatar with one SSO login and one Karma reputation score that travels with you across every app, game and world built on top of it — full transparency and full control over your own data, right down to the field level.

This is the foundation of the OASIS Omniverse: a network of unified layers, WEB 4 (identity & unification) through WEB 10 (source), each building on the one below to connect blockchains, metaverses, AI, human consciousness and beyond into a single interoperable whole.

👉 See the full ecosystem at **[oasisomniverse.one](https://oasisomniverse.one)**.

<a name="web6-ai-benefits"></a>

## Benefits Of Building On The WEB 6 AI Layer API

- **ONE API. EVERY AI - one endpoint routes across OpenAI, Anthropic, Google Gemini, xAI Grok, Qwen, DeepSeek, OpenServ and more, with zero per-provider refactoring.**
- **Every AI request is grounded in real identity and ecosystem context (avatar, karma, data from WEB 4; cross-world OAPPs and the holon graph from WEB 5) - not just a generic model proxy.**
- **The Holonic BRAID fractal memory hierarchy gives agents shared, persistent, hierarchical memory instead of a stateless context window.**
- **FAHRN (the Reasoning Network) self-optimizes agent registration, scoring and dispatch across a mesh of agents.**
- **Multi-agent orchestrator adapters for MCP, A2A, LangChain, AutoGen, CrewAI and Semantic Kernel - plug in your existing agent stack rather than rewriting it.**
- **Image generation alongside chat/completion, through the same unified endpoint.**
- **Integrate any WEB2 or WEB3 tech into your (web)app without having to learn or worry about new tech stacks/languages.**
- **SSO Avatar with a Karma reputation system (inherited from WEB 4 - full accountability, zero crime, dark-net proof).**
- **Maximum integration & interoperability, auto load-balancing, auto fail-over, auto replication.**
- **HOT-swappable plugin architecture. HTTP REST/gRPC/GraphQL/CLI/Native endpoints.**
- **Write once, deploy everywhere, now and forever - the GOD Protocol/API.**
- **Full redundancy/zero downtime - impossible to shut down. Zero lag.**
- **Decentralised distributed P2P networking - works offline and syncs automatically (even over LAN/Bluetooth/Mesh).**
- **Agent-centric: you own and store your own data.**
- **AI/Machine Learning over all of the world's aggregated data.**
- **WEB 7 Symbiosis Layer ready.**

Check out more info below:<br><br>
[The Power Of The OASIS API](https://drive.google.com/file/d/1nnhGpXcprr6kota1Y85HDDKsBfJHN6sn/view?usp=sharing) <br>
[Holonic Braid Whitepaper](https://web6.oasisomniverse.one/holonic-braid-whitepaper.html) <br>
[Main OASIS Repo](https://github.com/NextGenSoftwareUK/OASIS)

<a name="web6-ai-packages"></a>

## WEB 6 AI Layer API Packages

### Javascript

<https://www.npmjs.com/package/@oasisomniverse/web6-api> \
<https://github.com/NextGenSoftwareUK/OASIS-API-Javascript-Package-WEB6>

<a name="csharp"></a>

### C#

<https://github.com/NextGenSoftwareUK/OASIS>

<a name="get-involved"></a>

## Do You Want To Get Involved?

We are always looking for people to jump in and get involved, you do not need to be an existing coder, we can help you with that... you just need a willingness to learn and to have an open heart, we are always more interested with what is in your heart rather than your head! ;-)

The whole world is the Our World team, hence the name... ;-) It is not our project; it is all of humanities...

We also offer FREE training and apprenticeship program with the NextGen Developer Training Programmes. We will teach you all we know over time and you get to work on this real live commercial codebase rather than wasting time working on throw away dummy apps as most training offers. No previous skills/experience required and is open to everyone, but especially for all disadvantaged people including special needs, homeless, unemployed, prison inmates, kids on the streets etc. We want to help the people the world has forgotten and for people who have stopped believing in themselves, we **BELIEVE IN YOU** and in time you will again too. Everyone has a gift for the world, and we will help you find yours… Find out more by checking out the links below:

<a href="https://c8119036-8b0a-4498-ab07-331841f19b4b.filesusr.com/ugd/4280d8_ad8787bd42b1471bae73003bfbf111f7.pdf">NextGen Developer Training Programme</a><br>
<a href="https://c8119036-8b0a-4498-ab07-331841f19b4b.filesusr.com/ugd/4280d8_999d98ba615e4fa6ab4383a415ee24c5.pdf">NextGen Junior Developer Training Programme</a>

We are looking for Web Devs (with any of these: react, angular, vue, js, html, css), Unity Devs & C# Devs.

If anyone is interested in developing this game/platform, then we would LOVE to hear from you! 😊 There will be opportunities for people to own shares and/or cryptocurrency (as well as other unique perks such as premium locations in both the geolocation and VR versions, personal or business service spotlights, free lifetime access to all premium paid services, massive karma points (allowing your avatar to progress to more advanced stages in the game unlocking new exciting quests, areas to explore & new special abilities/superpowers) plus lots more!) based on the input they are willing to provide.

Thank you and we hope we find interest from people to join us on this exciting incredible journey.

**Want to make a difference in the world?**

**What will be your legacy?**

**Ready to be a hero?**

If the answer is YES, then please [proceed to here](https://github.com/NextGenSoftwareUK/OASIS/wiki/So-You-Want-To-Get-Involved%3F-Ready-To-Be-A-Hero%3F)...

<a href="https://drive.google.com/file/d/1b_G08UTALUg4H3jPlBdElZAFvyRcVKj1/view">Dev Requirements To Join The Our World Tribe</a><br>
<a href="https://drive.google.com/file/d/12pCk20iLw_uA1yIfojcP6WwvyOT4WRiO/view?usp=sharing">The Our World Mission (Summary)</a><br>
<http://web6.oasisomniverse.one><br>
<http://api.web6.oasisomniverse.one><br>
<https://github.com/NextGenSoftwareUK/OASIS><br>
<http://oasisomniverse.one><br>
<http://www.ourworldthegame.com><br>
<http://www.nextgenworld.co.uk><br>

<https://www.npmjs.com/package/@oasisomniverse/web4-api><br>
<https://www.npmjs.com/package/@oasisomniverse/web5-api><br>
<https://www.npmjs.com/package/@oasisomniverse/web7-api><br>
<https://www.npmjs.com/package/@oasisomniverse/web8-api><br>
<https://www.npmjs.com/package/@oasisomniverse/web9-api><br>
<https://www.npmjs.com/package/@oasisomniverse/web10-api><br>

**TOGETHER WE CAN CREATE A BETTER WORLD**

In Love, Light & Hope,<br>
The Our World Tribe

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

Every controller on the OASIS WEB 6 WebAPI is reachable as a lowerCamel
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

WEB 6 is an internal AI layer that sits behind the same OASIS avatar identity
as WEB 4/WEB 5 - it has no avatar/login endpoints of its own. Reuse a JWT
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

### FAHRN Solve (`web6.fahrn`) — v2.0

```js
// Full pipeline in one call: classify → avatar context → BRAID → dispatch → answer + trace
const answer = await web6.fahrn.solve({
  problem: 'Design a fault-tolerant data pipeline for 1M events/sec',
  avatarId,
  returnReasoning: true
});

// Dry-run budget estimate before committing
const estimate = await web6.fahrn.budgetEstimate({ taskType: 'architecture', mode: 'parallel', agentCount: 3 });
```

### DID / Verifiable Credentials (`web6.auth`) — v2.0

```js
const did = await web6.auth.createDid({ avatarId });
const resolved = await web6.auth.resolveDid({ did: 'did:key:z6Mk...' });
const vc = await web6.auth.issueVc({ subjectDid: did.result.id, claims: { role: 'developer', karma: 1200 } });
const { result: { valid } } = await web6.auth.verifyVc({ credential: vc.result, issuerAvatarId: avatarId });
```

### External Memory (`web6.externalMemory`) — v2.0

```js
const providers = await web6.externalMemory.getProviders();
const memories = await web6.externalMemory.search({ query: 'user preferences', topK: 5 });
await web6.externalMemory.add({ provider: 'mem0', content: 'User prefers concise answers', avatarId });
```

### ML.NET (`web6.ml`) — v2.0

```js
const { result: { taskType } } = await web6.ml.classifyTask({ text: 'Solve this integral: ∫x² dx' });
const { result: { sentiment } } = await web6.ml.analyseSentiment({ text: 'This is amazing!' });
const models = await web6.ml.listModels();
```

### Telemetry & Usage (`web6.telemetry`, `web6.usage`) — v2.0

```js
const events = await web6.telemetry.history({ limit: 20 });
const usage = await web6.usage.getUsage();          // current month USD spend + token count
const health = await web6.providers.status();       // live latency per AI provider
```

### A2A Protocol (`web6.a2a`) — v2.0

```js
const task = await web6.a2a.sendTask({ message: { parts: [{ text: 'Analyse this dataset' }] } });
const status = await web6.a2a.getTask({ id: task.result.id });
await web6.a2a.cancelTask({ id: task.result.id });
```

## Module reference

14 modules, 40 operations in total. Full per-method tables live in
[`docs/`](./docs/README.md).

| Client property | Route prefix | Operations |
| --- | --- | --- |
| `web6.completion` | `v1` | 3 (complete, openServModels, embed) |
| `web6.fahrn` | `v1/fahrn` | 2 (solve, budgetEstimate) |
| `web6.holonicBraid` | `v1/holonic-braid` | 2 |
| `web6.holonicMemory` | `v1/holonic-memory` | 7 (incl. propagateUp, searchMemory) |
| `web6.images` | `v1/images` | 1 |
| `web6.orchestrator` | `v1/orchestrators` | 3 |
| `web6.reasoningNetwork` | `v1/reasoning-network` | 4 |
| `web6.auth` | `v1/auth` | 4 (DID + Verifiable Credentials) |
| `web6.externalMemory` | `v1/memory/external` | 4 (providers, search, add, delete) |
| `web6.ml` | `v1/ml` | 4 (models, classifyTask, sentiment, train) |
| `web6.telemetry` | `v1/telemetry` | 1 (history) |
| `web6.usage` | `v1/usage` | 1 (getUsage) |
| `web6.providers` | `v1/providers` | 1 (status) |
| `web6.a2a` | `a2a` | 3 (sendTask, getTask, cancelTask) |

See [`docs/README.md`](./docs/README.md) for the full generated reference,
or [`docs/modules/`](./docs/modules) for per-module method tables with
parameter and route details.

## Regenerating

The generated modules, type declarations and docs are produced from
`endpoints.json` (extracted from the WEB 6 WebAPI controller source):

```bash
npm run generate   # src/modules/*.js + src/modules/index.js
npm run types      # src/modules/*.d.ts + index.d.ts + src/core/types.d.ts
npm run docs       # docs/README.md + docs/modules/*.md
```

## Testing

```bash
npm test
```


## Troubleshooting

**`Failed to execute 'fetch' on 'Window': Illegal invocation`** — add this one-liner before your SDK script tag:

```html
<script>if(window.fetch) window.fetch = window.fetch.bind(window);</script>
```

Or pass a bound fetch to the constructor:

```js
const client = new Web6Client({
  baseUrl: 'https://api.web6.oasisomniverse.one',
  fetchImpl: window.fetch.bind(window)
});
```

See [docs/troubleshooting.md](docs/troubleshooting.md) for the full list of common issues.
## License

MIT

