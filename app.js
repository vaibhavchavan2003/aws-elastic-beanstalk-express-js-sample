const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello vaibhav chavan! We are learning app'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
