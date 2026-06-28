# Images — `web6.images`

Source controller: [`ImagesController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/WEB6/NextGenSoftware.OASIS.Web6.WebAPI/Controllers/ImagesController.cs)
Route prefix: `v1/images`
1 operation(s).

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

### `generate`

Generates an image via the requested provider (StabilityAI or OpenAI). POST https://api.web6.oasisomniverse.one/v1/images/generate

**POST** `v1/images/generate`

**Request**

Body type: `ImageGenerationRequest`

| Field | Type |
| --- | --- |
| `Prompt` | `string` |
| `Provider` | `AIProviderType` |
| `Model` | `string` |
| `Size` | `string` |
| `AspectRatio` | `string` |
| `OutputFormat` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `ImageGenerationResponse`

| Field | Type |
| --- | --- |
| `Provider` | `string` |
| `Model` | `string` |
| `ImageBase64` | `string` |
| `OutputFormat` | `string` |

**Example**

```js
const { isError, message, result } = await web6.images.generate({
    prompt: "example string",
    provider: {  },
    model: "example string",
    size: "example string",
    aspectRatio: "example string",
    outputFormat: "example string"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "Provider": "example string", "Model": "example string", "ImageBase64": "example string", "OutputFormat": "example string" }
}
```

