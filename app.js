// dotenv
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

//imports
const express = require('express');
const http = require('http');
const swagger = require('swagger-ui-express');
const YAML = require('yamljs');
const cors = require('./cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// port
const PORT = process.env.PORT || 3001;

// instances
const app = express();
const server =  http.createServer(app);

// documentation
const OAS = YAML.load('./online-store-api-doc.yml');
app.use('/api-docs', swagger.serve, swagger.setup(OAS));

// loggin
app.use(morgan('dev'));

// body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//cors
app.use(cors);

// unimplemented routes
app.use((req, res, next) => res.json({ message: 'Not found' }).status(404));

// errors
app.use((error, req, res, next) => {
    console.log(error);
    res.status(error.status || 500);
    res.json({ message : 'Internal server error'});
})

// server
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));