'use strict'


var users = require('./users.js')
var routes = require('./index.js')
module.exports = function(app) {

    app.use('/', routes);
    app.use('/users', users);
}