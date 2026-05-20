const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('GitHub Actions CI/CD Pipeline Working');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
