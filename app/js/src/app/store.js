define([ 'ember', 'ember-data' ], function (Ember, DS) {
	var store = DS.Store.extend({
		revision: 12,
		adapter: 'DS.FixtureAdapter'
	});

	return store;
});