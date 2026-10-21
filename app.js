const express = require('express');
const app = express();
const port = process.env.PORT;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World! My first Node.js app is running. CI/CD 7');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
