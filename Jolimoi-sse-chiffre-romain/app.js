const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const method = require('./lib/method.js');
const PORT = 3000;
var ssePusher = require('sse-pusher'); 
var push = ssePusher();
app.use('', push.handler());

app.use('/css', express.static('css'));  
app.use(bodyParser.urlencoded({extended: false })); 
app.set('views', './views');
app.set('view engine', 'ejs');	
app.use('event', push.handler());


app.get('/', (req, res) => {
	
	if(req.query.val) {
		var roman = method.AtoR(req.query.val);
		push('number', roman);
		console.log('ici');
		console.log('la');
	}
	res.render('index');
});

app.get('/event', push.handler());

//Methode ajax post avec réponse express
// app.post('/', (req, res) => {
// 	if (!req.body) {
// 		return res.sendStatus(500);
// 	} else {
// 		console.log(req.body.number);
// 		var roman = method.AtoR(req.body.number);
// 		console.log(roman);
// 		res.send(roman);

// 	}
// });


 


app.listen(PORT, function() {
  console.log('connecté au port '+PORT);
});
