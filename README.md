# node-hello-world

A minimal Node.js HTTP server built with [Express](https://expressjs.com/). It exposes a single health-check endpoint and serves as a starting point for learning or prototyping with Express.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended, e.g. v20+)
- npm (bundled with Node.js)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd node-hello-world
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   ```bash
   npm run dev
   ```

   The server will start and log:

   ```
   Server listening on http://localhost:3000
   ```

## API Endpoints

| Method | Path    | Description                  | Response Example           |
|--------|---------|------------------------------|----------------------------|
| GET    | `/ping` | Health-check / ping endpoint | `{ "message": "pong" }`   |

## Configuration

| Variable | Description                        | Default |
|----------|------------------------------------|---------|
| `PORT`   | Port the server listens on         | `3000`  |

You can set the `PORT` environment variable to run the server on a different port:

```bash
PORT=8080 npm run dev
```

## License

This project does not currently specify a license. Add a `LICENSE` file to define the terms under which this code may be used.
