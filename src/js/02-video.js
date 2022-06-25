
import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
   const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate',throttle(getCurrentTime, 1000));
const currentTime = localStorage.getItem("videoplayer-current-time")
const time =JSON.parse(currentTime)

player.setCurrentTime(time.seconds).then(function (seconds) {
 

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

function getCurrentTime(seconds) {
localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds))
};

