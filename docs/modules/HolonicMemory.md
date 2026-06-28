# HolonicMemory — `web6.holonicMemory`

Source controller: [`HolonicMemoryController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/WEB6/NextGenSoftware.OASIS.Web6.WebAPI/Controllers/HolonicMemoryController.cs)
Route prefix: `v1/holonic-memory`
5 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `getEarthHolon` | GET | `v1/holonic-memory/earth` | – |
| `getOrCreateHolon` | POST | `v1/holonic-memory/holons` | – |
| `propagate` | POST | `v1/holonic-memory/holons/{childHolonId}/propagate` | `childHolonId` |
| `recordMemory` | POST | `v1/holonic-memory/holons/{holonId}/memory` | `holonId` |
| `setMembraneRule` | PUT | `v1/holonic-memory/holons/{holonId}/membrane-rule` | `holonId` |

## Example

```js
const web6 = new Web6Client({ baseUrl: '...' });
web6.setToken(jwtToken); // reuse a WEB4 JWT

const { isError, message, result } = await web6.holonicMemory.getEarthHolon({});
if (isError) throw new Error(message);
console.log(result);
```
