var ipc = require('ipc');

var closeEl = document.querySelector('.close');
closeEl.addEventListener('click', function () {
    ipc.send('close-main-window');
});

var minWinEL = document.querySelector('.minwin');
minWinEL.addEventListener('click', function () {
    ipc.send('minimize-window');
});

console.log(`This platform is ${process.platform}`);
