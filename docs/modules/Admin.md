# Admin — `web6.admin`

Source controller: [`AdminController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/WEB6/NextGenSoftware.OASIS.Web6.WebAPI/Controllers/AdminController.cs)
Route prefix: `v1/admin/config`
11 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `configBraid` | POST | `v1/admin/config/braid` | – | – | remaining args |
| `configFahrn` | POST | `v1/admin/config/fahrn` | – | – | remaining args |
| `deleteConfig` | DELETE | `v1/admin/config` | – | – | – |
| `deleteObservedCosts` | DELETE | `v1/admin/config/observed-costs` | – | – | – |
| `getAudit` | GET | `v1/admin/config/audit` | – | – | – |
| `getCatalogue` | GET | `v1/admin/config/catalogue` | – | – | – |
| `getConfig` | GET | `v1/admin/config` | – | – | – |
| `getObservedCosts` | GET | `v1/admin/config/observed-costs` | – | – | – |
| `publishCatalogue` | POST | `v1/admin/config/catalogue/publish` | – | – | remaining args |
| `setConfig` | POST | `v1/admin/config` | – | – | remaining args |
| `validateCatalogue` | POST | `v1/admin/config/catalogue/validate` | – | – | remaining args |

## Example

```js
const web6 = new Web6Client({ baseUrl: '...' });
web6.setToken(jwtToken); // reuse a WEB4 JWT

const { isError, message, result } = await web6.admin.configBraid({
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
