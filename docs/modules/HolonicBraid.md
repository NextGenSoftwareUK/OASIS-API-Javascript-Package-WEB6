# HolonicBraid — `web6.holonicBraid`

Source controller: [`HolonicBraidController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/WEB6/NextGenSoftware.OASIS.Web6.WebAPI/Controllers/HolonicBraidController.cs)
Route prefix: `v1/holonic-braid`
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

### `getGraph`

Looks up the shared reasoning graph already generated for a task type, if any.

**GET** `v1/holonic-braid/graph/{taskType}`

Route parameters:

| Field | Type |
| --- | --- |
| `taskType` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `HolonicBraidGraphDto`

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `TaskType` | `string` |
| `MermaidDiagram` | `string` |
| `GeneratedByModel` | `string` |
| `TimesReused` | `int` |
| `CreatedUtc` | `DateTime` |
| `ParentHolonId` | `Guid` |
| `AvgSolverAccuracy` | `double` |
| `Version` | `int` |

**Example**

```js
const { isError, message, result } = await web6.holonicBraid.getGraph({
    taskType: '<taskType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "TaskType": "example string", "MermaidDiagram": "example string", "GeneratedByModel": "example string", "TimesReused": 1, "CreatedUtc": "2026-01-01T00:00:00Z", "ParentHolonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvgSolverAccuracy": 1.0, "Version": 1 }
}
```

---

### `saveGraph`

Seeds the shared library with a reasoning graph for a task type (the "generator" step of the two-stage BRAID protocol).

**POST** `v1/holonic-braid/graph/{taskType}`

Route parameters:

| Field | Type |
| --- | --- |
| `taskType` | `string` |

**Request**

Body type: `SaveGraphRequest`

| Field | Type |
| --- | --- |
| `MermaidDiagram` | `string` |
| `GeneratedByModel` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `HolonicBraidGraphDto`

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `TaskType` | `string` |
| `MermaidDiagram` | `string` |
| `GeneratedByModel` | `string` |
| `TimesReused` | `int` |
| `CreatedUtc` | `DateTime` |
| `ParentHolonId` | `Guid` |
| `AvgSolverAccuracy` | `double` |
| `Version` | `int` |

**Example**

```js
const { isError, message, result } = await web6.holonicBraid.saveGraph({
    taskType: '<taskType>',
    mermaidDiagram: "example string",
    generatedByModel: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "TaskType": "example string", "MermaidDiagram": "example string", "GeneratedByModel": "example string", "TimesReused": 1, "CreatedUtc": "2026-01-01T00:00:00Z", "ParentHolonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "AvgSolverAccuracy": 1.0, "Version": 1 }
}
```

