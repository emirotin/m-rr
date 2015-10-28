var Sound = require('node-aplay');

console.log('Start playback');

// with ability to pause/resume:
var music = new Sound('./roll.wav');
music.play();

music.on('complete' function () {
	console.log('Done with playback!');
	process.exit(0);
});
