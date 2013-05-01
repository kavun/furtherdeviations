define(function () {
	
	return Ember.Route.extend({
		model: function () {
			var user = {};

			$.ajax({
				url: '/api/user',
				success: function (_user) {
					user = _user
				},
				async: false
			});

			return user;
		}
	});

});