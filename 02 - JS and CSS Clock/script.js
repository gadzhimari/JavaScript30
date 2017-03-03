window.addEventListener('load', init);

function init() {
  let hoursHand = document.querySelector('.hour-hand');
  let minutesHand = document.querySelector('.min-hand');
  let secondsHand = document.querySelector('.second-hand');

  const initialAngle = 90;
  
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let deg = initialAngle + seconds * 6;
  secondsHand.style.transform = `rotate(${deg}deg)`;

  deg = initialAngle + minutes * 6;
  minutesHand.style.transform = `rotate(${deg}deg)`;

  deg = initialAngle + hours * 30;
  hoursHand.style.transform = `rotate(${deg}deg)`;

  setInterval(update, 1000);

  function update() {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    deg = initialAngle + seconds * 6;
    secondsHand.style.transform = `rotate(${deg}deg)`;

    if (seconds == 0) {
      deg = initialAngle + minutes * 6;
      minutesHand.style.transform = `rotate(${deg}deg)`;
    }
    if (minutes == 0) {
      deg = initialAngle + hours * 30;
      hoursHand.style.transform = `rotate(${deg}deg)`;
    }


  }
}
