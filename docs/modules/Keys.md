# Keys — `web6.keys`

Source controller: [`KeysController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/WEB6/NextGenSoftware.OASIS.Web6.WebAPI/Controllers/KeysController.cs)
Route prefix: `v1/keys`
3 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `createKey` | POST | `v1/keys` | – | – | remaining args |
| `deleteKey` | DELETE | `v1/keys/{provider}` | `provider` | – | – |
| `getKeys` | GET | `v1/keys` | – | – | – |

## Example

```js
const web6 = new Web6Client({ baseUrl: '...' });
web6.setToken(jwtToken); // reuse a WEB4 JWT

const { isError, message, result } = await web6.keys.createKey({
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
