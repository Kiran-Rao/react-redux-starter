const express = require('express');
const http = require('http');
const winston = require('winston');
const helmet = require('helmet');
const nodeAppServer = require('./node-app-server');
const bodyParser = require('body-parser');

/**
 * Heroku-friendly production http server.
 *
 * Serves your app and allows you to proxy APIs if needed.
 */

const app = express();
const PORT = process.env.PORT || 8080;

// Enable various security helpers.
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the distributed assets and allow HTML5 mode routing. Must be last.
nodeAppServer(app);

// Start up the server.
const server = http.createServer(app);
server.listen(PORT, (err) => {
  if (err) {
    winston.error(err);
    return;
  }

  winston.info(`Listening on port ${PORT}`);
});
