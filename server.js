var express = require('express'),
		bodyParser = require('body-parser'),
		methodOverride = require('method-override'),
		mongoose = require('mongoose'),
		server = express();


		server.use(express.static('public'));
		server.use(bodyParser.urlencoded({
			extended: true
		}));
		server.use(bodyParser.json);
		server.use(methodOverride('_method'));

		server.use(function(req, res, next){
			console.log('REQ.BODY: ' + req.body);
			console.log('REQ.PARAMS: ' + req.params);

			next();
		});








		server.listen(3000, function(){
			console.log('listening on port 3000');
		});