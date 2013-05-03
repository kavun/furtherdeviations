define(function () {
	
	return Ember.Route.extend({
		model: function () {
			var user = {};

			$.ajax({
				url: '/api/user',
				async: false
			}).done(function (_user) { 
				user = _user;
			});

			return user;
		}
	});

});