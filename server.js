const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const routes = require('./routes/routes.js')(app, fs);

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
    console.log('listening on port %s...', server.address().port);
});