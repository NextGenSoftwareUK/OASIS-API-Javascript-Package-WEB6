# ReasoningNetwork — `web6.reasoningNetwork`

Source controller: [`ReasoningNetworkController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/WEB6/NextGenSoftware.OASIS.Web6.WebAPI/Controllers/ReasoningNetworkController.cs)
Route prefix: `v1/reasoning-network`
4 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `dispatch` | POST | `v1/reasoning-network/dispatch` | – | – | remaining args |
| `getAgents` | GET | `v1/reasoning-network/agents` | – | – | – |
| `registerAgent` | POST | `v1/reasoning-network/agents` | – | – | remaining args |
| `seedOpenServAgents` | POST | `v1/reasoning-network/agents/seed-openserv` | – | – | remaining args |

## Example

```js
const web6 = new Web6Client({ baseUrl: '...' });
web6.setToken(jwtToken); // reuse a WEB4 JWT

const { isError, message, result } = await web6.reasoningNetwork.dispatch({
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
