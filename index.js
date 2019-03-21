const express = require('express');
const app = express();
const port = 8080;

app.get('/ping', (req, res) => {
  res.status(200);
  res.json({'pong': true});
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});