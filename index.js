const functions = require('firebase-functions');
const app = require('./server');

// Export the Express app as a Firebase Cloud Function
exports.app = functions.https.onRequest(app);