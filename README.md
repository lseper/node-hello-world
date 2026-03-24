# node-hello-world

A minimal Node.js HTTP server built with [Express](https://expressjs.com/).

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended, e.g. v20+)
- npm (bundled with Node.js)

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

## API Endpoints

| Method | Path    | Description         | Response                    |
| ------ | ------- | ------------------- | --------------------------- |
| GET    | `/ping` | Health check / ping | `{ "message": "pong" }`    |

### Example

```bash
curl http://localhost:3000/ping
```

```json
{ "message": "pong" }
```

## Configuration

| Variable | Description                  | Default |
| -------- | ---------------------------- | ------- |
| `PORT`   | Port the server listens on   | `3000`  |

To run the server on a custom port:

```bash
PORT=8080 npm run dev
```

## License

This project does not currently specify a license. Please add a `LICENSE` file to define the terms under which this project may be used and distributed.
