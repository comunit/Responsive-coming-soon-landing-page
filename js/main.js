const countdown = document.querySelector('.countdown');

// set launch date 
const launchDate = new Date('Jan 1, 2019 13:00:00').getTime();

// update every secound
const intvl = setInterval(() => {
  // get todays date and time in millisecounds
  const now = new Date().getTime();
  // distance from now to launch date
  const distance = launchDate - now;
  // time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // display stuff
  countdown.innerHTML = `
   <div>${days}<span>Days</span></div>
   <div>${hours}<span>Hours</span></div>
   <div>${mins}<span>Mins</span></div>
   <div>${seconds}<span>Seconds</span></div>
  `;

  // if launch date passed
  if (distance < 0) {
    // stop the countdown
    // clearInterval
    clearInterval(intvl);
    //style and output text
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'Launched';
  }

}, 1000);