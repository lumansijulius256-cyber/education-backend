const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get('/', (req, res) => {
  res.send('Education Changer Backend is running');
});

app.get('/api', (req, res) => {
  res.send('API is live');
});

// IMPORTANT: PORT
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
