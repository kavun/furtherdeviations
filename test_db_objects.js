/*
new Deviation({
	title         : 'Test Deviation 3',
	date_published: new Date,
	description   : 'this is a little bit of a description'
}).save(function (err, dev) {
	if (err) console.log(err);
	else console.log(conf.color.brightyellow + dev._id + conf.color.reset);

	new Story({
		deviation_id: dev._id,
		date_written: new Date,
		title: 'First Story',
		author: 'Kevin Reed',
		description: 'ehh pretty good'
	}).save(function (err, story) {
		if (err) { console.log(err); }
		else {
			dev.stories.push(story._id);
			dev.save();
			console.log(conf.color.brightgreen + story._id + conf.color.reset);
		}
	});

	new Story({
		deviation_id: dev._id,
		date_written: new Date,
		title: 'Second Story',
		author: 'Kevin Reed',
		description: 'terrible'
	}).save(function (err, story) {
		if (err) { console.log(err); }
		else {
			dev.stories.push(story._id);
			dev.save();
			console.log(conf.color.brightgreen + story._id + conf.color.reset);
		}
	});
});

new Deviation({
	title         : 'Test Deviation 4',
	date_published: new Date,
	description   : 'this is a little bit of a description'
}).save(function (err, dev) {
	if (err) console.log(err);
	else console.log(conf.color.brightyellow + dev._id + conf.color.reset);

	new Story({
		deviation_id: dev._id,
		date_written: new Date,
		title: 'First Piece',
		author: 'Kevin Reed',
		description: 'ehh pretty good'
	}).save(function (err, story) {
		if (err) { console.log(err); }
		else {
			dev.stories.push(story._id);
			dev.save();
			console.log(conf.color.brightgreen + story._id + conf.color.reset);
		}
	});

	new Story({
		deviation_id: dev._id,
		date_written: new Date,
		title: 'Second Piece',
		author: 'Kevin Reed',
		description: 'terrible'
	}).save(function (err, story) {
		if (err) { console.log(err); }
		else {
			dev.stories.push(story._id);
			dev.save();
			console.log(conf.color.brightgreen + story._id + conf.color.reset);
		}
	});
});
*/