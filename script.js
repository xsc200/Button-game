// Start a timer for 5 seconds.
// When time is up, use alert() to tell
// the user how many times they were able
// to click the button.

let count = 0;
let onClick= () => {
  count++;
};

document.querySelector(".the-button").addEventListener("click", onClick);

let timer = 5000; // 5 sec
let outputClickCount = () => {
  alert("You've click the button " + count + " times.");
}
setTimeout(outputClickCount, timer);