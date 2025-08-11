const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Main route that returns "Hello World"
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server only if this file is run directly (not during testing)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export the app for testing
module.exports = app;