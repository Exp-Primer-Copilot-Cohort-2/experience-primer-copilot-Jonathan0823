// Create a web server
// 1. Import the express library
const express = require('express');
// 2. Create an express app
const app = express();
// 3. Set the port
const port = 3000;
// 4. Create a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
// 5. Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// 6. Run the server
// node comment.js
// 7. Test the server
// Open the browser and navigate to http://localhost:3000
// You should see "Hello, World!" displayed in the browser
// 8. Stop the server
// Press Ctrl+C in the terminal