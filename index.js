const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', function (req, res) {
	res.send('Hola mundo!');
})

app.listen(PORT, function () {
  console.log('Started hola-mundo server on %d', PORT);
})
