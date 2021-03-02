// dotenv
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

//imports
const express = require('express');
const http = require('http');
const swagger = require('swagger-ui-express');
const YAML = require('yamljs');

// port
const PORT = process.env.PORT || 3001;

// instances
const OAS = YAML.load('./online-store-api-doc.yml');
const app = express();
const server =  http.createServer(app);

// documentation
app.use('/api-docs', swagger.serve, swagger.setup(OAS));

// routes
app.use('/', (req, res, next) => res.send('Hello World').status(200));

// server
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));