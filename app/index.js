var Sound = require('node-aplay');

// with ability to pause/resume:
var music = new Sound('/path/to/the/file/filename.wav');
music.play();

music.on('complete' function () {
	console.log('Done with playback!');
	process.exit(0);
});
