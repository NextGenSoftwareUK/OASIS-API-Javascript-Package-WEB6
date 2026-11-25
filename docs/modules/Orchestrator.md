# Orchestrator

Route prefix: `v1/orchestrate`

Run a multi-agent workflow through one of the supported orchestration frameworks. Each method takes a single args object that is sent as the JSON body.

| Method | Route |
| --- | --- |
| `crewAI` | **POST** `v1/orchestrate/crewai` |
| `autoGen` | **POST** `v1/orchestrate/autogen` |
| `langGraph` | **POST** `v1/orchestrate/langgraph` |

```js
const { isError, message, result } = await web6.orchestrator.crewAI({ /* request body */ });
```

The earlier `getAdapters`, `invoke` and `registerAdapter` methods called `v1/orchestrators`, which the server no longer has, so they were removed.
