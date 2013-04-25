define(function () {

	return Ember.Route.extend({
		model: function () {
			return FurtherDeviations.Deviation.find();
		}
	});

});