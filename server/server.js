const express = require('express');
const bodyParser = require('body-parser');
const routeIndex = require('./db/routes');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());

app.use('/api', routeIndex);

app.get('*', (req, res) => {
  console.log('catch', req.query);
  res.json({ message: `something went wrong ${req.originalUrl}` });
});

app.listen(PORT, 'localhost', () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
