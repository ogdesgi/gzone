var express = require('express');
var router = express.Router();

module.exports = function (app) {
    router.post('/upload',
        app.oauth.authorise(),
        app.actions.aws.upload
    );
    return router;
};
