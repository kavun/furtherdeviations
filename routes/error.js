/*
* GET erorr page
*/

exports.error = function (req, res) {
	res.render('404', { 
		url: req.url 
	});
};