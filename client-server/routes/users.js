var express = require('express');
var assert = require('assert');
var restify = require('restify-clients');
var router = express.Router();

// Create JSON client
var client = restify.createJSONClient({
  url: 'http://127.0.0.1:4000'
});

/* GET users listing. */
router.get('/', function(req, res, next) {//on app.js -> app.use('/users', usersRouter); so / means /users

  client.get('/users', function (err, request, response, obj){

    assert.ifError(err);

    res.end(JSON.stringify(obj, null, 2));

  });

});

module.exports = router;
