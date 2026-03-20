# node-hello-world

A minimal Node.js HTTP server built with [Express](https://expressjs.com/).

## Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later recommended)
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

   The server will start listening on `http://localhost:3000` by default.

## API Endpoints

| Method | Path    | Response                    | Description              |
|--------|---------|-----------------------------|--------------------------|
| GET    | `/ping` | `{ "message": "pong" }`    | Health-check / heartbeat |

## Configuration

| Variable | Default | Description                        |
|----------|---------|------------------------------------|
| `PORT`   | `3000`  | Port the server listens on         |

You can override the port by setting the `PORT` environment variable:

```bash
PORT=8080 npm run dev
```

## License

This project does not currently specify a license. Add a `LICENSE` file to define the terms under which this code may be used.
