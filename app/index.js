var express = require('express');
var Sound = require('node-aplay');

var playing = false;

function play() {
	if (playing) return;

	console.log('Start playback');
	playing = true;
	var music = new Sound('./roll.wav');
	music.play();

	music.on('complete', function () {
		console.log('Done with playback!');
		playing = false;
	});
}

var app = express();
app.set('view engine', 'ejs')

app.use(express.static('public'));

app.post('/play', function(req, res) {
	play();
	res.json({ playing: playing });
});

app.get('/status', function(req, res) {
	res.json({ playing: playing });
});

app.get('/', function(req, res) {
	res.render('index', { playing: playing });
});

app.listen(80);

console.log('Listening');
