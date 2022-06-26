
import Player from '@vimeo/player';
import throttle  from 'lodash.throttle';
   const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate',throttle(getCurrentTime, 1000));
const currentTime = localStorage.getItem("videoplayer-current-time")

function timeChecked() {
    if (currentTime !== null) {
        const time = JSON.parse(currentTime)
    }
    return time.seconds
}


player.setCurrentTime(timeChecked())

function getCurrentTime(seconds) {
localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds))
};

