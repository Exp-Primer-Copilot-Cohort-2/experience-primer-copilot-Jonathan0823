//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Create a route to listen to requests
app.get('/', (req, res) => {
  res.send('Hello World');
});

//Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});