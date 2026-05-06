const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Backend service name from docker-compose
const BACKEND_URL = "http://backend:5000";

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(BACKEND_URL);
    res.send(`
      <h1>Frontend Service</h1>
      <p>${response.data.message}</p>
      <p>DB Time: ${response.data.time}</p>
    `);
  } catch (error) {
    res.send("<h1>Error connecting to backend</h1>");
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Frontend running on port ${PORT}`);
});