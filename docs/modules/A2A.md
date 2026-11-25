# A2A — `web6.a2A`

Source controller: [`A2AController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/WEB6/NextGenSoftware.OASIS.Web6.WebAPI/Controllers/A2AController.cs)
Route prefix: `a2a`
16 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `cancelTask` | POST | `a2a/tasks/{id}/cancel` | `id` | – | remaining args |
| `delegateTask` | POST | `a2a/network/tasks` | – | – | remaining args |
| `find` | GET | `a2a` | – | – | – |
| `getCard` | GET | `a2a/{agentId}` | `agentId` | – | – |
| `getNetworkTask` | GET | `a2a/network/tasks/{id}` | `id` | – | – |
| `getTask` | GET | `a2a/tasks/{id}` | `id` | – | – |
| `getTaskEvents` | GET | `a2a/tasks/{id}/events` | `id` | – | – |
| `jsonRpc` | POST | `a2a/network/rpc` | – | – | remaining args |
| `listTasks` | GET | `a2a/network/tasks` | – | – | – |
| `markProcessed` | POST | `a2a/network/messages/{id}/processed` | `id` | – | remaining args |
| `payAgent` | POST | `a2a/network/payments` | – | – | remaining args |
| `pendingMessages` | GET | `a2a/network/messages/pending` | – | – | – |
| `publishCard` | PUT | `a2a/network/card` | – | – | remaining args |
| `sendMessage` | POST | `a2a/network/messages` | – | – | remaining args |
| `sendTask` | POST | `a2a/tasks/send` | – | – | remaining args |
| `updateTask` | POST | `a2a/network/tasks/{id}/status` | `id` | – | remaining args |

## Example

```js
const web6 = new Web6Client({ baseUrl: '...' });
web6.setToken(jwtToken); // reuse a WEB4 JWT

const { isError, message, result } = await web6.a2A.cancelTask({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
