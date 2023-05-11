const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public'));

// Set up routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname)+"/views/index.html");
});

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running at http://localhost:${process.env.PORT || 3000}`);
});
