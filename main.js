let media = document.querySelector(".music");
document.querySelector(".start").addEventListener("click", () => {
  let button = document.querySelector(".start");
  if (media.paused) {
    media.play();
    button.innerHTML = '<i class="bi bi-pause-fill"></i>';
  } else {
    media.pause();
    button.innerHTML = '<i class="bi bi-play-fill"></i>';
  }
  let timer = setInterval(() => {
    let minute = Math.floor(media.currentTime / 60);
    let secund = Math.floor(media.currentTime - minute * 60);
    let time = document.querySelector(".time");
    if (minute >= 10 && secund >= 10) {
      time.innerHTML = `${minute}:${secund}`;
    } else if (minute < 10 && secund > 9) {
      time.innerHTML = `0${minute}:${secund}`;
    } else if (minute > 10 && secund < 10) {
      time.innerHTML = `${minute}:0${secund}`;
    } else {
      time.innerHTML = `0${minute}:0${secund}`;
    }
    let minuteAll = Math.floor(media.duration  / 60);
    let secundAll = Math.floor(media.duration  - minuteAll * 60);
    time.innerHTML += `   /  ${minuteAll}:${secundAll}`;
    let width = media.currentTime/media.duration*200;
    document.querySelector('.timer').style.width=`${width}px`
  }, 1000);
});
