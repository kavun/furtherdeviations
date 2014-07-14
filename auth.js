var Auth = (function () {

	var conf = require('./conf');
	var everyauth = require('everyauth');
	everyauth.debug = true;

	function UserCollection (sources) {
		this._uid = 0;
		this.byID = {};
		this.byLogin = {};
		if (Array.isArray(sources)) {
			for (var i = 0, l = sources.length; i < l; i++) {
				this['by' + sources[i] + 'ID'] = {};
			}
		}
	}
	UserCollection.prototype = {
		create: function (source, meta) {
			var user;
			if (arguments.length === 1) { // password based
				user = source;
				user.id = ++this._uid;
				/**
				 * user.password = hashSalt(user.password)
				 */
				this.byID[this._uid] = user;
			} else { // source based (twitter)
				user = this.byID[++this._uid] = { id: this._uid };
				user[source] = meta;
				this['by' + source + 'ID'][meta.id] = user;
			}
			return user;
		},
		findOrCreate: function (source, meta) {
			var user;
			if (arguments.length === 1) { // password based
				user = this.byLogin[source.login] || this.create(source);
			} else { // source based (twitter)
				user = this['by' + source + 'ID'][meta.id] || this.create(source, meta);
			}
			return user;
		}
	}
	var userCollection = new UserCollection(['twitter']);

	everyauth.everymodule.findUserById(function (id, callback) {
		callback(null, userCollection.byID[id]);
	});

	everyauth.twitter
		.consumerKey(conf.twitter.consumerKey)
		.consumerSecret(conf.twitter.consumerSecret)
		.findOrCreateUser(
			function _findOrCreateUser(session, accessToken, accessTokenSecret, twitterUserMetadata) {
				return userCollection.findOrCreate('twitter', twitterUserMetadata);
			}
		)
		.redirectPath('/');

	return everyauth;

})();

module.exports = Auth