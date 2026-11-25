# Orchestrator — `web6.orchestrator`

Source controller: [`OrchestratorController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/WEB6/NextGenSoftware.OASIS.Web6.WebAPI/Controllers/OrchestratorController.cs)
Route prefix: `v1/orchestrate`
3 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `autoGen` | POST | `v1/orchestrate/autogen` | – | – | remaining args |
| `crewAI` | POST | `v1/orchestrate/crewai` | – | – | remaining args |
| `langGraph` | POST | `v1/orchestrate/langgraph` | – | – | remaining args |

## Example

```js
const web6 = new Web6Client({ baseUrl: '...' });
web6.setToken(jwtToken); // reuse a WEB4 JWT

const { isError, message, result } = await web6.orchestrator.autoGen({
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
