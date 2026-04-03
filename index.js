const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let counter = 0;

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.post("/increment", (req, res) => {
  counter += 1;
  res.json({ counter });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

module.exports = app;
