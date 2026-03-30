# node-hello-world

A minimal Express.js HTTP server with a single `/ping` endpoint.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (ships with Node.js)

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the server:

   ```bash
   npm run dev
   ```

   The server will start and log:

   ```
   Server listening on http://localhost:3000
   ```

## API

### `GET /ping`

Returns a JSON response confirming the server is running.

**Response:**

```json
{
  "message": "pong"
}
```

**Example:**

```bash
curl http://localhost:3000/ping
```

## Configuration

| Variable | Description              | Default |
|----------|--------------------------|---------|
| `PORT`   | Port the server binds to | `3000`  |

To use a custom port:

```bash
PORT=8080 npm run dev
```

## License

No license file is currently included in this repository.
