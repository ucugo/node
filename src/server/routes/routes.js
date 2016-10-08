'use strict'


var users = require('./users-route.js')
var routes = require('./index-route.js')
module.exports = function(app) {

    app.use('/', routes);
    app.use('/users', users);
}