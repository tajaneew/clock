const hourHand = document.querySelector('.hour-hand'),
 secondHand = document.querySelector('.second-hand'),
minsHand = document.querySelector('.min-hand');


function setDate() {
    //console.log('Hi');
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/ 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  //  console.log(seconds);

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((mins / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);