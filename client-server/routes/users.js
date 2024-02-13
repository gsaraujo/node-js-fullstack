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

    res.json(obj);

  });

});

router.get('/:id', function(req, res, next) {//on app.js -> app.use('/users', usersRouter); so / means /users

  client.get(`/users/${req.params.id}`, function (err, request, response, obj){

    assert.ifError(err);

    res.json(obj);

  });

});

router.put('/:id', function(req, res, next) {//on app.js -> app.use('/users', usersRouter); so / means /users

  client.put(`/users/${req.params.id}`, req.body,  function (err, request, response, obj){

    assert.ifError(err);

    res.json(obj);

  });

});

router.delete('/:id', function(req, res, next) {//on app.js -> app.use('/users', usersRouter); so / means /users

  client.del(`/users/${req.params.id}`, function (err, request, response, obj){

    assert.ifError(err);

    res.json(obj);

  });

});

router.post('/', function(req, res, next) {//on app.js -> app.use('/users', usersRouter); so / means /users

  client.post(`/users/`, req.body, function (err, request, response, obj){

    assert.ifError(err);

    res.json(obj);

  });

});

module.exports = router;
