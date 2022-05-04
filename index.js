global.__logger = require('./api/logger.js')

const express = require('express');
const timeout = require('connect-timeout');
const app = express();
const port = process.env.PORT || 8033;
const bodyParser = require('body-parser');

const log = __logger.addLogger(__filename);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(timeout(2000));
app.use(haltOnTimeout);

function haltOnTimeout(req, res, next) {
    if (!req.timeout) next();
}

// Routes
const routes = require('./api/routes');
routes(app);

function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    log.error(`Error: ${err}\nRequested url: ${req.url}`);
    res.status(500);
    res.render('error', { error: err });
}

app.use(function (req, res) {
    log.debug(`Requested method [${req.method}] '${req.originalUrl}' not found.`);
    res.status(404).send({ url: req.originalUrl + ' not found' });
});
app.use(errorHandler);

app.listen(port);

log.debug(`Service started on: ${port}`);
