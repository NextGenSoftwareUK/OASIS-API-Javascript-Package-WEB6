# Orchestrator — `web6.orchestrator`

Source controller: [`OrchestratorController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/WEB6/NextGenSoftware.OASIS.Web6.WebAPI/Controllers/OrchestratorController.cs)
Route prefix: `v1/orchestrators`
3 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `getAdapters` | GET | `v1/orchestrators` | – |
| `invoke` | POST | `v1/orchestrators/invoke` | – |
| `registerAdapter` | POST | `v1/orchestrators` | – |

## Example

```js
const web6 = new Web6Client({ baseUrl: '...' });
web6.setToken(jwtToken); // reuse a WEB4 JWT

const { isError, message, result } = await web6.orchestrator.getAdapters({});
if (isError) throw new Error(message);
console.log(result);
```
