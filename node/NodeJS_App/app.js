const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World from Node.js Docker Container!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

