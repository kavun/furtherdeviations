var Auth = (function () {

	var conf = require('./conf');
	var everyauth = require('everyauth');
	everyauth.debug = true;

	function addUser (source, sourceUser) {
		var user;
		if (arguments.length === 1) { // password-based
			user = sourceUser = source;
			user.id = ++nextUserId;
			return usersById[nextUserId] = user;
		} else { // non-password-based
			user = usersById[++nextUserId] = {id: nextUserId};
			user[source] = sourceUser;
		}
		return user;
	}

	var usersById = {};
	var nextUserId = 0;
	var usersByTwitId = {};
	var usersByLogin = {
		'kevin.a.reed@gmail.com': addUser({ 
			login: 'kevin.a.reed@gmail.com', 
			password: 'password'
		})
	};

	everyauth.everymodule
		.findUserById( function (id, callback) {
			callback(null, usersById[id]);
		});

	everyauth.twitter
		.consumerKey(conf.twitter.consumerKey)
		.consumerSecret(conf.twitter.consumerSecret)
		.findOrCreateUser(
			function _findOrCreateUser(session, accessToken, accessTokenSecret, twitterUserMetadata) {
				var _user = usersByTwitId[twitterUserMetadata.id] || (usersByTwitId[twitterUserMetadata.id] = addUser('twitter', twitterUserMetadata));
				console.log(_user);
				return _user;
			}
		)
		.redirectPath('/');

	return everyauth;

})();

module.exports = Auth