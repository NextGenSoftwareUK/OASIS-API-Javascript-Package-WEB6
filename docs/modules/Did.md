# Did — `web6.did`

Source controller: [`DidController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/WEB6/NextGenSoftware.OASIS.Web6.WebAPI/Controllers/DidController.cs)
Route prefix: `v1/auth`
4 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `createDid` | POST | `v1/auth/did` | – | – | remaining args |
| `issueVc` | POST | `v1/auth/vc` | – | – | remaining args |
| `resolveDid` | GET | `v1/auth/did/{did}` | `did` | – | – |
| `verifyVc` | POST | `v1/auth/vc/verify` | – | – | remaining args |

## Example

```js
const web6 = new Web6Client({ baseUrl: '...' });
web6.setToken(jwtToken); // reuse a WEB4 JWT

const { isError, message, result } = await web6.did.createDid({
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
