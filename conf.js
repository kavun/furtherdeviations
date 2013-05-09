module.exports = {
	twitter: {
		consumerKey   : 'mMp4tn5uvY4uEnTjkRQdg',
		consumerSecret: 'SaRb3LbuKhyqhs9ptcTGpVxvM2pYTKbKxatfBtueFbY'
	},
	session: {
		secret: 'simon'
	},
	db: {
		prod: 'mongodb://MongoLab-kb:3rV8tEMPdCbIRtS!3a4rt4F2YL2ArOvqIJW!uKbInuQ-@ds045077.mongolab.com:45077/MongoLab-kb',
		dev : 'mongodb://localhost/furtherdeviations-dev',
		test: 'mongodb://localhost/furtherdeviations-test'
	},
	color: {
		black  : '\033[30m',
		red    : '\033[31m',
		green  : '\033[32m',
		yellow : '\033[33m',
		blue   : '\033[34m',
		magenta: '\033[35m',
		cyan   : '\033[36m',
		white  : '\033[37m',

		brightblack  : '\033[90m',
		brightred    : '\033[91m',
		brightgreen  : '\033[92m',
		brightyellow : '\033[93m',
		brightblue   : '\033[94m',
		brightmagenta: '\033[95m',
		brightcyan   : '\033[96m',
		brightwhite  : '\033[97m',

		bgblack  : '\033[40m',
		bgred    : '\033[41m',
		bggreen  : '\033[42m',
		bgyellow : '\033[43m',
		bgblue   : '\033[44m',
		bgmagenta: '\033[45m',
		bgcyan   : '\033[46m',
		bgwhite  : '\033[47m',

		bgbrightblack  : '\033[100m',
		bgbrightred    : '\033[101m',
		bgbrightgreen  : '\033[102m',
		bgbrightyellow : '\033[103m',
		bgbrightblue   : '\033[104m',
		bgbrightmagenta: '\033[105m',
		bgbrightcyan   : '\033[106m',
		bgbrightwhite  : '\033[107m',

		reset: '\033[0m',
		b    : '\033[1m',
		i    : '\033[3m',
		u    : '\033[4m'
	}
}