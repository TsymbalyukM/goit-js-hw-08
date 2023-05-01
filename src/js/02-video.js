import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

console.log(player);

player.on('timeupdate', _.throttle(saveData, 1000));
