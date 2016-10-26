var express = require('express');
var request = require('request-sync');
var router = express.Router();

var data = [];

var url ='https://dax-rest.comscore.eu/v1/reportitems.xml?itemid=122698&startdate=20160928&enddate=20161004&site=tvandiplayer&format=json&client=bbc&user={}&password={}'
router.get('/', function(req, res, next) {
    var response = request(url);
    JSON.parse(response.body)
                .reportitems
                .reportitem
                .forEach(function(content) {
                    data.push(content)
                })
    res.send(data[0].rows.r[0].c[1])
});

module.exports = router;
