# Orchestrator — `web6.orchestrator`

Source controller: [`OrchestratorController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/WEB6/NextGenSoftware.OASIS.Web6.WebAPI/Controllers/OrchestratorController.cs)
Route prefix: `v1/orchestrators`
3 operation(s).

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

### `getAdapters`

**GET** `v1/orchestrators`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `OrchestratorAdapterConfig` (array)

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `Name` | `string` |
| `Protocol` | `OrchestratorProtocolType` |
| `EndpointUrl` | `string` |
| `AuthToken` | `string` |
| `ExtraConfig` | `Dictionary<string, string>` |

**Example**

```js
const { isError, message, result } = await web6.orchestrator.getAdapters({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Protocol": {  }, "EndpointUrl": "example string", "AuthToken": "example string", "ExtraConfig": { "<string>": "example string" } }]
}
```

---

### `invoke`

**POST** `v1/orchestrators/invoke`

**Request**

Body type: `OrchestratorInvokeRequest`

| Field | Type |
| --- | --- |
| `AdapterId` | `Guid` |
| `Input` | `string` |
| `Parameters` | `Dictionary<string, object>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `OrchestratorInvokeResponse`

| Field | Type |
| --- | --- |
| `AdapterName` | `string` |
| `Protocol` | `OrchestratorProtocolType` |
| `Output` | `string` |
| `LatencyMs` | `long` |

**Example**

```js
const { isError, message, result } = await web6.orchestrator.invoke({
    adapterId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    input: "example string",
    parameters: { "<string>": {} }
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "AdapterName": "example string", "Protocol": {  }, "Output": "example string", "LatencyMs": 1 }
}
```

---

### `registerAdapter`

Aggregates every agent protocol/orchestration framework (MCP, A2A, LangChain, AutoGen, CrewAI, Semantic Kernel, or any generic webhook) behind WEB6's unified interface. Register an external orchestrator once, then invoke it the same way you'd call any AI provider through /v1/complete.

**POST** `v1/orchestrators`

**Request**

Body type: `OrchestratorAdapterConfig`

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `Name` | `string` |
| `Protocol` | `OrchestratorProtocolType` |
| `EndpointUrl` | `string` |
| `AuthToken` | `string` |
| `ExtraConfig` | `Dictionary<string, string>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `OrchestratorAdapterConfig`

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `Name` | `string` |
| `Protocol` | `OrchestratorProtocolType` |
| `EndpointUrl` | `string` |
| `AuthToken` | `string` |
| `ExtraConfig` | `Dictionary<string, string>` |

**Example**

```js
const { isError, message, result } = await web6.orchestrator.registerAdapter({
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    name: "example string",
    protocol: {  },
    endpointUrl: "example string",
    authToken: "example string",
    extraConfig: { "<string>": "example string" }
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Protocol": {  }, "EndpointUrl": "example string", "AuthToken": "example string", "ExtraConfig": { "<string>": "example string" } }
}
```

