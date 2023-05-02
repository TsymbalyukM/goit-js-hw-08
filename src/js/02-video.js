import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

console.log(player);
const CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(saveTimeData, 1000));

function saveTimeData(data) {
  localStorage.setItem(CURRENT_TIME, data.seconds);
}
player.setCurrentTime(localStorage.getItem(CURRENT_TIME) || 0);
