# Schedules — `web6.schedules`

Source controller: [`SchedulesController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/WEB6/NextGenSoftware.OASIS.Web6.WebAPI/Controllers/SchedulesController.cs)
Route prefix: `v1/schedules`
8 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `create` | POST | `v1/schedules` | – | – | remaining args |
| `deleteById` | DELETE | `v1/schedules/{id}` | `id` | – | – |
| `getById` | GET | `v1/schedules/{id}` | `id` | – | – |
| `list` | GET | `v1/schedules` | – | – | – |
| `pause` | POST | `v1/schedules/{id}/pause` | `id` | – | remaining args |
| `resume` | POST | `v1/schedules/{id}/resume` | `id` | – | remaining args |
| `runs` | GET | `v1/schedules/{id}/runs` | `id` | – | – |
| `update` | PUT | `v1/schedules/{id}` | `id` | – | remaining args |

## Example

```js
const web6 = new Web6Client({ baseUrl: '...' });
web6.setToken(jwtToken); // reuse a WEB4 JWT

const { isError, message, result } = await web6.schedules.create({
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
