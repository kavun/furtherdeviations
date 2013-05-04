define(function () {

	DS.MongoDBAdapter = DS.RESTAdapter.extend({
		serializer: DS.RESTSerializer.extend({
			primaryKey: function (type) {
				return '_id';
			}
		})
	});

	DS.MongoDBAdapter.configure('plurals', {
		story: 'stories'
	});

	DS.MongoDBAdapter.reopen({
		namespace: 'api'
	});

	DS.MongoDBAdapter.map('FurtherDeviations.Deviation', {
		stories: { embedded: 'load' }
	});

	var store = DS.Store.extend({
		revision: 12,
		adapter : 'DS.MongoDBAdapter'
	});

	return store;
});