const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ["Dev is Drinking - The Cryptocurrency Club"];
const typingDelay = 100;
const textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex][charIndex];
    charIndex++;
    setTimeout(type, typingDelay);
  } 
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, 1500);
});
