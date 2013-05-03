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

	var store = DS.Store.extend({
		revision: 12,
		adapter : 'DS.MongoDBAdapter'
	});

	return store;
});