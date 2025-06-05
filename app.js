const express = require('express');
const app = express();
const PORT = 3000;
const tests_route = require('./routes/tests_route');
const cors = require('cors');

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.use('/tests', tests_route);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
