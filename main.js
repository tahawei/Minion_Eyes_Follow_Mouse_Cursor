let eye_ref = document.querySelectorAll(".eye");

let events = ["mousemove", "touchmove"];

// Check For touch Screen

function isTouchDevice() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

// Same function for both events

events.forEach((eventType) => {
  document.body.addEventListener(eventType, (event) => {
    eye_ref.forEach((eye) => {
      // Get bounding Client
      let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 2;

      let x = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
      let y = !isTouchDevice() ? event.clientY : event.touches[0].clientY;
      let radian = Math.atan2(x - eyeX, y - eyeY);
      let rotationDegress = radian * (180 / Math.PI) * -1 + 180;
      eye.style.transform = `rotate(${rotationDegress}deg)`;
    });
  });
});
