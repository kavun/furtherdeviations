define(function () {
	var store = DS.Store.extend({
		revision: 12,
		adapter: 'DS.FixtureAdapter'
	});

	return store;
});