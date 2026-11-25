# Discovery — `web6.discovery`

Source controller: [`DiscoveryController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/WEB6/NextGenSoftware.OASIS.Web6.WebAPI/Controllers/DiscoveryController.cs)
Route prefix: `null`
2 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `getAgentManifest` | GET | `/.well-known/agent.json` | – | – | – |
| `getMcpManifest` | GET | `/.well-known/mcp.json` | – | – | – |

## Example

```js
const web6 = new Web6Client({ baseUrl: '...' });
web6.setToken(jwtToken); // reuse a WEB4 JWT

const { isError, message, result } = await web6.discovery.getAgentManifest({});
if (isError) throw new Error(message);
console.log(result);
```
