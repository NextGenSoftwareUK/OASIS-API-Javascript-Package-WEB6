# ReasoningNetwork — `web6.reasoningNetwork`

Source controller: [`ReasoningNetworkController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/WEB6/NextGenSoftware.OASIS.Web6.WebAPI/Controllers/ReasoningNetworkController.cs)
Route prefix: `v1/reasoning-network`
4 operation(s).

Every method takes a single args object: any key matching a `{token}` in the route is substituted into the URL; everything else becomes the query string (GET/DELETE) or JSON body (POST/PUT). Every call resolves to the standard OASIS envelope:

```ts
{
  isError: boolean;
  isWarning: boolean;
  message: string;
  errorCode?: string;
  result: T; // see each endpoint's Response section below
}
```

## Operations

### `dispatch`

Dispatches a problem to the reasoning network. The controller agent scores eligible agents, picks Serial/Parallel/Decomposed execution, runs loop detection, assembles the final Mermaid plan and updates every involved agent's score via EMA before returning.

**POST** `v1/reasoning-network/dispatch`

**Request**

Body type: `DispatchRequest`

| Field | Type |
| --- | --- |
| `Problem` | `string` |
| `TaskType` | `string` |
| `Mode` | `DispatchMode` |
| `EligibleAgentIds` | `List<Guid>` |
| `AvatarId` | `Guid` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `DispatchResult`

| Field | Type |
| --- | --- |
| `SessionId` | `Guid` |
| `ModeUsed` | `DispatchMode` |
| `AgentPlans` | `List<AgentExecutionPlan>` |
| `FinalMermaidPlan` | `string` |
| `WinningAgentId` | `Guid` |
| `HolonicBraidGraphId` | `Guid` |
| `TotalLatencyMs` | `long` |

**Example**

```js
const { isError, message, result } = await web6.reasoningNetwork.dispatch({
    problem: "example string",
    taskType: "example string",
    mode: {  },
    eligibleAgentIds: ["3fa85f64-5717-4562-b3fc-2c963f66afa6"],
    avatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "SessionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ModeUsed": {  }, "AgentPlans": [{ "AgentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AgentName": "example string", "CompositeScoreAtDispatch": 1.0, "MermaidDiagram": "example string", "Stalled": true, "LoopDetected": true, "LatencyMs": 1 }], "FinalMermaidPlan": "example string", "WinningAgentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "HolonicBraidGraphId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "TotalLatencyMs": 1 }
}
```

---

### `getAgents`

Lists every reasoning agent currently registered with FAHRN, with its live composite scoring metadata.

**GET** `v1/reasoning-network/agents`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ReasoningAgentMetadata` (array)

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `AgentName` | `string` |
| `Provider` | `AIProviderType` |
| `Model` | `string` |
| `CategoryScores` | `Dictionary<string, double>` |
| `SpeedScore` | `double` |
| `CostScore` | `double` |
| `LoopDetectionScore` | `double` |
| `FailureRate` | `double` |
| `TasksCompleted` | `int` |
| `LastUpdatedUtc` | `DateTime` |

**Example**

```js
const { isError, message, result } = await web6.reasoningNetwork.getAgents({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AgentName": "example string", "Provider": {  }, "Model": "example string", "CategoryScores": { "<string>": 1.0 }, "SpeedScore": 1.0, "CostScore": 1.0, "LoopDetectionScore": 1.0, "FailureRate": 1.0, "TasksCompleted": 1, "LastUpdatedUtc": "2026-01-01T00:00:00Z" }]
}
```

---

### `registerAgent`

Registers a new reasoning agent (e.g. a specific provider/model) with the network.

**POST** `v1/reasoning-network/agents`

**Request**

Body type: `ReasoningAgentMetadata`

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `AgentName` | `string` |
| `Provider` | `AIProviderType` |
| `Model` | `string` |
| `CategoryScores` | `Dictionary<string, double>` |
| `SpeedScore` | `double` |
| `CostScore` | `double` |
| `LoopDetectionScore` | `double` |
| `FailureRate` | `double` |
| `TasksCompleted` | `int` |
| `LastUpdatedUtc` | `DateTime` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ReasoningAgentMetadata`

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `AgentName` | `string` |
| `Provider` | `AIProviderType` |
| `Model` | `string` |
| `CategoryScores` | `Dictionary<string, double>` |
| `SpeedScore` | `double` |
| `CostScore` | `double` |
| `LoopDetectionScore` | `double` |
| `FailureRate` | `double` |
| `TasksCompleted` | `int` |
| `LastUpdatedUtc` | `DateTime` |

**Example**

```js
const { isError, message, result } = await web6.reasoningNetwork.registerAgent({
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    agentName: "example string",
    provider: {  },
    model: "example string",
    categoryScores: { "<string>": 1.0 },
    speedScore: 1.0,
    costScore: 1.0,
    loopDetectionScore: 1.0,
    failureRate: 1.0,
    tasksCompleted: 1,
    lastUpdatedUtc: "2026-01-01T00:00:00Z"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AgentName": "example string", "Provider": {  }, "Model": "example string", "CategoryScores": { "<string>": 1.0 }, "SpeedScore": 1.0, "CostScore": 1.0, "LoopDetectionScore": 1.0, "FailureRate": 1.0, "TasksCompleted": 1, "LastUpdatedUtc": "2026-01-01T00:00:00Z" }
}
```

---

### `seedOpenServAgents`

Seeds FAHRN with one reasoning agent per model in the OpenServ SERV catalog (skips any AgentName already registered), so the network can immediately score/route/braid across every OpenServ-reachable model (OpenAI, Anthropic, Google, xAI, Qwen, DeepSeek) behind a single SERV_API_KEY. Safe to call repeatedly. POST https://api.web6.oasisomniverse.one/v1/reasoning-network/agents/seed-openserv

**POST** `v1/reasoning-network/agents/seed-openserv`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ReasoningAgentMetadata` (array)

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `AgentName` | `string` |
| `Provider` | `AIProviderType` |
| `Model` | `string` |
| `CategoryScores` | `Dictionary<string, double>` |
| `SpeedScore` | `double` |
| `CostScore` | `double` |
| `LoopDetectionScore` | `double` |
| `FailureRate` | `double` |
| `TasksCompleted` | `int` |
| `LastUpdatedUtc` | `DateTime` |

**Example**

```js
const { isError, message, result } = await web6.reasoningNetwork.seedOpenServAgents({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AgentName": "example string", "Provider": {  }, "Model": "example string", "CategoryScores": { "<string>": 1.0 }, "SpeedScore": 1.0, "CostScore": 1.0, "LoopDetectionScore": 1.0, "FailureRate": 1.0, "TasksCompleted": 1, "LastUpdatedUtc": "2026-01-01T00:00:00Z" }]
}
```

