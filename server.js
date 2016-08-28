let express = require('express');
let path = require('path');

let app = new express();

app.use('/', express.static(__dirname));
app.listen(process.env.PORT || 3000)