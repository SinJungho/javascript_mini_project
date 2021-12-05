const timer = document.querySelector('.timer__text');
let start = document.querySelector('.timer__btn__start').addEventListener('click', startTimer);
let stop = document.querySelector('.timer__btn__stop').addEventListener('click', stopTimer);

let TIME = 0;
let cron;

function startTimer() {
	printTimer();
	// stopTimer();
	corn = setInterval(printTimer, 1000);
	timer.classList.add('hide');
	console.log('hello');
}

function stopTimer() {
	clearInterval(corn);
	timer.classList.remove('hide');
	console.log('hello');
}


function printTimer() {
	const hours = Math.floor(TIME / 3600);
	const checkMinutes = Math.floor(TIME / 60);
	const second = TIME % 60;
	const minutes = checkMinutes % 60;

	timer.innerText = `${hours < 10 ? `0${hours} ` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${second < 10 ? `0${second}` : second}`; 
	TIME++;
}
startTimer();
// start.addEventListener('click', startTimer);
// stop.addEventListener('click',  stopTimer);