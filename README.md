# node-hello-world

A minimal Node.js HTTP server built with [Express](https://expressjs.com/).

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended, e.g. v20+)
- npm (bundled with Node.js)

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd node-hello-world
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm run dev
   ```

   The server will start listening on `http://localhost:3000` by default.

## API Endpoints

| Method | Path    | Status | Response                  |
| ------ | ------- | ------ | ------------------------- |
| GET    | `/ping` | 200    | `{ "message": "pong" }`  |

## Configuration

| Variable | Default | Description                          |
| -------- | ------- | ------------------------------------ |
| `PORT`   | `3000`  | Port the HTTP server listens on      |

Example:

```bash
PORT=8080 npm run dev
```

## License

This project does not currently specify a license. Add a `LICENSE` file to define the terms under which this code may be used.
