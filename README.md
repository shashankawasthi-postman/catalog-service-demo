# Catalog Service (Demo)

Demo microservice for managing a product catalog.

This is a **demo repo**: dummy, in-memory data and no authentication. It exists to
demonstrate an API spec paired with a minimal running implementation (e.g. for
Postman collection generation, mock servers, or API design walkthroughs).

## Contents

- [`openapi.yaml`](./openapi.yaml) — OpenAPI 3.0 spec describing the `products` API.
- [`server.js`](./server.js) — Minimal Express server implementing the spec with in-memory dummy data.
- [`package.json`](./package.json) — Dependencies (just Express).

## Run it

```bash
npm install
npm start
```

The server starts on `http://localhost:4006`.

## Endpoints

| Method | Path | Description |
| --- | --- | --- |
| GET | `/health` | Health check |
| GET | `/products` | List all products |
| POST | `/products` | Create a product |
| GET | `/products/:id` | Get a product by ID |
| PUT | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |

## Import into Postman

Import [`openapi.yaml`](./openapi.yaml) directly into Postman (File → Import) to generate
a collection, or point Postman's mock server / API Builder at this spec.
