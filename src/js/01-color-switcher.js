const startRandomBodyBackgroundColor = document.querySelector('[data-start]');
const stopRandomBodyBackgroundColor = document.querySelector('[data-stop]');
startRandomBodyBackgroundColor.addEventListener('click', getStart);
stopRandomBodyBackgroundColor.addEventListener('click', getStop);

let timerId = null;
function getStart() {
  startRandomBodyBackgroundColor.setAttribute('disabled', 'true');
  stopRandomBodyBackgroundColor.removeAttribute('disabled');
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
}

function getStop() {
  stopRandomBodyBackgroundColor.setAttribute('disabled', 'true');
  startRandomBodyBackgroundColor.removeAttribute('disabled');
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
