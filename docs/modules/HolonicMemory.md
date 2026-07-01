# HolonicMemory — `web6.holonicMemory`

Source controller: [`HolonicMemoryController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/WEB6/NextGenSoftware.OASIS.Web6.WebAPI/Controllers/HolonicMemoryController.cs)
Route prefix: `v1/holonic-memory`
5 operation(s).

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

### `getEarthHolon`

The Holonic BRAID fractal memory hierarchy - Session → Agent → User → Group → Neighbourhood → District → City → County → Country → Continent → Earth. Create/get holons at any level, set the membrane rule that governs what propagates upward, record memory, and trigger propagation one hop at a time.

**GET** `v1/holonic-memory/earth`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `HolonicMemoryHolonDto`

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `Level` | `Enums.HolonicMemoryLevel` |
| `ParentHolonId` | `Guid` |
| `Name` | `string` |
| `MemoryItems` | `List<HolonicMemoryItem>` |
| `MembraneRule` | `MembraneRule` |

**Example**

```js
const { isError, message, result } = await web6.holonicMemory.getEarthHolon({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Level": /* <Enums.HolonicMemoryLevel> */, "ParentHolonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "MemoryItems": [{ "FieldName": "example string", "Value": "example string", "Tags": ["example string"], "CreatedUtc": "2026-01-01T00:00:00Z" }], "MembraneRule": { "FieldsAllowedToPropagate": ["example string"], "Retention": /* <Enums.RetentionPolicy> */, "WhoCanRead": [ /* <System.Guid> */ ], "TriggerCondition": "example string", "AnonymisedAggregateOnly": true } }
}
```

---

### `getOrCreateHolon`

**POST** `v1/holonic-memory/holons`

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `level` | `HolonicMemoryLevel` |
| `name` | `string` |
| `parentHolonId` | `Guid` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `HolonicMemoryHolonDto`

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `Level` | `Enums.HolonicMemoryLevel` |
| `ParentHolonId` | `Guid` |
| `Name` | `string` |
| `MemoryItems` | `List<HolonicMemoryItem>` |
| `MembraneRule` | `MembraneRule` |

**Example**

```js
const { isError, message, result } = await web6.holonicMemory.getOrCreateHolon({
    level: '<level>',
    name: 'example string',
    parentHolonId: '3fa85f64-5717-4562-b3fc-2c963f66afa6'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Level": /* <Enums.HolonicMemoryLevel> */, "ParentHolonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "MemoryItems": [{ "FieldName": "example string", "Value": "example string", "Tags": ["example string"], "CreatedUtc": "2026-01-01T00:00:00Z" }], "MembraneRule": { "FieldsAllowedToPropagate": ["example string"], "Retention": /* <Enums.RetentionPolicy> */, "WhoCanRead": [ /* <System.Guid> */ ], "TriggerCondition": "example string", "AnonymisedAggregateOnly": true } }
}
```

---

### `propagate`

Propagates whatever the child holon's membrane rule permits up to its parent (a single hop).

**POST** `v1/holonic-memory/holons/{childHolonId}/propagate`

Route parameters:

| Field | Type |
| --- | --- |
| `childHolonId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `int`

**Example**

```js
const { isError, message, result } = await web6.holonicMemory.propagate({
    childHolonId: '<childHolonId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": 1
}
```

---

### `recordMemory`

**POST** `v1/holonic-memory/holons/{holonId}/memory`

Route parameters:

| Field | Type |
| --- | --- |
| `holonId` | `Guid` |

**Request**

Body type: `HolonicMemoryItem`

| Field | Type |
| --- | --- |
| `FieldName` | `string` |
| `Value` | `string` |
| `Tags` | `List<string>` |
| `CreatedUtc` | `DateTime` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await web6.holonicMemory.recordMemory({
    holonId: '<holonId>',
    fieldName: "example string",
    value: "example string",
    tags: ["example string"],
    createdUtc: "2026-01-01T00:00:00Z"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

---

### `setMembraneRule`

**PUT** `v1/holonic-memory/holons/{holonId}/membrane-rule`

Route parameters:

| Field | Type |
| --- | --- |
| `holonId` | `Guid` |

**Request**

Body type: `MembraneRule`

| Field | Type |
| --- | --- |
| `FieldsAllowedToPropagate` | `List<string>` |
| `Retention` | `Enums.RetentionPolicy` |
| `WhoCanRead` | `List<System.Guid>` |
| `TriggerCondition` | `string` |
| `AnonymisedAggregateOnly` | `bool` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `bool`

**Example**

```js
const { isError, message, result } = await web6.holonicMemory.setMembraneRule({
    holonId: '<holonId>',
    fieldsAllowedToPropagate: ["example string"],
    retention: /* <Enums.RetentionPolicy> */,
    whoCanRead: [ /* <System.Guid> */ ],
    triggerCondition: "example string",
    anonymisedAggregateOnly: true
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": true
}
```

