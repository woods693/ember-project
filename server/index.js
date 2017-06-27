/* eslint-env node */

// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

const bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(bodyParser.urlencoded({ extended: true}));

  app.post('/token', function(req, res){

  	if(req.body.username === 'group14' && 
  		req.body.password === 'password') {
  		res.send( { access_token: 'secretcode'});
  	} else {
  		res.status(400).send({ error: 'invalid_pass'});
  	}

  });


  app.get('/api/students', function(req, res) {
  	if ( req.headers.authorization !== 'Bearer secretcode'){
  		return res.status(401).send('Unauthorized');
  	}
  	return res.status(200).send({
  		students: [
  		{	id: 1, name: 'Alin'},
  		{	id: 2, name: 'Chang'},
  		{	id: 3, name: 'Woody'}
  		]
  	});
  });
};
