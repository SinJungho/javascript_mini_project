function init() {
    setInterval(getToDoTime, 1000);
}

function getToDoTime() {
    let clock = document.querySelector('.todo__clock');
    const time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let second = time.getSeconds();
    clock.innerHTML = `${hour < 10 ? `0${hour}` : hour} : ${minutes < 10 ? `0${minutes}` : minutes} : ${second < 10 ? `0${second}` : second}`;
}

getToDoTime();
init();