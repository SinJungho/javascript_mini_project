let timerId;
let time = 0;
let hour, min, sec;
const startBtn = document.querySelector(".timer__btn__start");
let stopBtn = document.querySelector(".timer__btn__stop");
const stopwatch = document.querySelector(".timer__text");

function printTime() {
  time++;
  stopwatch.innerText = getTimeFormatString();
}

//시계 시작 - 재귀호출로 반복실행
function startTimer() {
  printTime();
  stopTimer();
  startBtn.classList.add("hide");
  timerId = setTimeout(startTimer, 1000);
  console.log('hello');
}

//시계 중지
function stopTimer() {
  if (timerId != null) {
    clearTimeout(timerId);
    startBtn.classList.remove("hide");
  }
}

// 시계 초기화
function resetTimer() {
  stopTimer();
  stopwatch.innerText = "00:00:00";
  time = 0;
}

// 시간(int)을 시, 분, 초 문자열로 변환
function getTimeFormatString() {
  hour = parseInt(String(time / (60 * 60)));
  min = parseInt(String((time - hour * 60 * 60) / 60));
  sec = time % 60;

  return (
    String(hour).padStart(2, "0") +
    ":" +
    String(min).padStart(2, "0") +
    ":" +
    String(sec).padStart(2, "0")
  );
}
