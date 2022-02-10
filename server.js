// Initialize Express
const express = require('express');
const app = express();

// Set opening port to localhost:3000
const PORT = 3000 || process.env.PORT;

// Output when port 3000 is running
app.listen(PORT, () => console.log('Server running on port ${PORT}'));
