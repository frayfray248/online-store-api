//imports
const express = require('express');
const http = require('http');

// port
const PORT = process.env.PORT || 3000;

// instances
const app = express();
const server =  http.createServer(app);

// routes
app.use('/', (req, res, next) => res.send('Hello World').status(200));

// server
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));