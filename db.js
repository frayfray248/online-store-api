// imports
const mongoose = require('mongoose');

// connection options
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};

// connect
mongoose.connect(process.env.DB, options);

// connection status logging
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log("Successfully connected to db")});