var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(require('connect-livereload')({
    port: 35729
}));

app.listen(3000);
exports = module.exports = app;