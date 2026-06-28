# HolonicBraid — `web6.holonicBraid`

Source controller: [`HolonicBraidController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/WEB6/NextGenSoftware.OASIS.Web6.WebAPI/Controllers/HolonicBraidController.cs)
Route prefix: `v1/holonic-braid`
2 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `getGraph` | GET | `v1/holonic-braid/graph/{taskType}` | `taskType` |
| `saveGraph` | POST | `v1/holonic-braid/graph/{taskType}` | `taskType` |

## Example

```js
const web6 = new Web6Client({ baseUrl: '...' });
web6.setToken(jwtToken); // reuse a WEB4 JWT

const { isError, message, result } = await web6.holonicBraid.getGraph({
    taskType: '<taskType>'
  });
if (isError) throw new Error(message);
console.log(result);
```
