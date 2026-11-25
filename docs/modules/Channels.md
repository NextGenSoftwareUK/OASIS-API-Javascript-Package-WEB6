# Channels — `web6.channels`

Source controller: [`ChannelsController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/WEB6/NextGenSoftware.OASIS.Web6.WebAPI/Controllers/ChannelsController.cs)
Route prefix: `v1/channels`
6 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `createLinkCode` | POST | `v1/channels/webhooks/link-codes` | – | – | remaining args |
| `deleteBinding` | DELETE | `v1/channels/webhooks/bindings/{bindingId}` | `bindingId` | – | – |
| `listBindings` | GET | `v1/channels/webhooks/bindings` | – | – | – |
| `receive` | GET | `v1/channels/webhooks/{channel}` | `channel` | – | – |
| `setMemory` | PUT | `v1/channels/webhooks/bindings/{bindingId}/memory` | `bindingId` | – | remaining args |
| `webhooksByChannel` | POST | `v1/channels/webhooks/{channel}` | `channel` | – | remaining args |

## Example

```js
const web6 = new Web6Client({ baseUrl: '...' });
web6.setToken(jwtToken); // reuse a WEB4 JWT

const { isError, message, result } = await web6.channels.createLinkCode({
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
