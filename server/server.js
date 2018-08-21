const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());

app.get('/api', (req, res) => {
  console.log('smoketest');
  res.json({ message: 'smoke test' });
});

app.listen(PORT, 'localhost', () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
