require('dotenv').config({ path: '.env' });

const express = require('express');
const app = express();
const router = require('./routes/routes'); // Ensure the correct path to the routes file
const conn = require('./conn'); // Ensure the connection setup is correct

// Middleware to parse JSON
app.use(express.json());

// Mount the router
app.use('/', router);

app.listen(4000, () => {
    console.log("Server running on port 4000");
});
