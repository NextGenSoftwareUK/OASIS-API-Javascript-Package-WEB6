# Completion — `web6.completion`

Source controller: [`CompletionController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/WEB6/NextGenSoftware.OASIS.Web6.WebAPI/Controllers/CompletionController.cs)
Route prefix: `v1`
2 operation(s).

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

### `complete`

Routes a completion request to whichever AI provider/model best fits, normalising the response. POST https://api.web6.oasisomniverse.one/v1/complete

**POST** `v1/complete`

**Request**

Body type: `CompletionRequest`

| Field | Type |
| --- | --- |
| `Provider` | `string` |
| `Model` | `string` |
| `Messages` | `List<ChatMessage>` |
| `Routing` | `RoutingOptions` |
| `AvatarId` | `Guid` |
| `Temperature` | `double?` |
| `MaxTokens` | `int?` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `CompletionResponse`

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Provider` | `string` |
| `Model` | `string` |
| `Content` | `string` |
| `PromptTokens` | `int` |
| `CompletionTokens` | `int` |
| `LatencyMs` | `long` |
| `FailedOver` | `bool` |

**Example**

```js
const { isError, message, result } = await web6.completion.complete({
    provider: "example string",
    model: "example string",
    messages: [{ "Id": "example string", "SessionId": "example string", "SenderId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Content": "example string", "MessageType": {  }, "Timestamp": "2026-01-01T00:00:00Z", "IsDelivered": true, "IsRead": true }],
    routing: { "Priority": "example string", "Fallback": true },
    avatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    temperature: 1.0,
    maxTokens: 1
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "example string", "Provider": "example string", "Model": "example string", "Content": "example string", "PromptTokens": 1, "CompletionTokens": 1, "LatencyMs": 1, "FailedOver": true }
}
```

---

### `openServModels`

Lists the models reachable through the OpenServ provider (provider: "openserv"), i.e. the full SERV catalog spanning OpenAI, Anthropic, Google, xAI, Qwen and DeepSeek behind one SERV_API_KEY. GET https://api.web6.oasisomniverse.one/v1/openserv/models

**GET** `v1/openserv/models`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `OpenServModel` (array)

| Field | Type |
| --- | --- |
| `Id` | `string` |
| `Label` | `string` |

**Example**

```js
const { isError, message, result } = await web6.completion.openServModels({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "Id": "example string", "Label": "example string" }]
}
```

