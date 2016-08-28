let express = require('express');
let path = require('path');

let app = new express();

app.use('/', express.static(__dirname));

app.all('*', (req, res, next) => {
	if (req.headers['x-forwarded-proto'] != 'https' && process.env.NODE_ENV == 'production') {
		res.redirect(process.env.APPLICATION_URL + req.url);
	} else {
		next();
	}
});

app.listen(process.env.PORT || 3000);