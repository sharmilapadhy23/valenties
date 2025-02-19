const febHolidays = [
  "Dear Love, you're my world 🌍",
  "Please feel this love cycle, it’s just for you ❤️",
  "You're my best friend and my true love 💑",
  "One and only you, forever you 😘",
  "In sorrow, in joy, it’s always you 🥰",
  "You're more than enough for my life ❤",
  "I love you with all my heart, always will ❤️",
  "You're my everything, my rock ✔",
  "You are my soulmate ✨💕",
  "And wait for it... my future husband 🥰",
  "I promise to always love and support you 🤭",
  "No distance can keep us apart 🥰",
  "You’re my one and only thread in life 💕",
  "You're the most handsome, funny, caring man alive 😘",
  "In one word: you're perfect 🥺",
  "You make me the happiest person in the world 🥰",
  "I'm so grateful to have met you ❤️",
  "I promise to always do my best for you 🥺",
  "I'll always be by your side 🤞✔",
  "Never feel alone, I’m always here for you 💓",
  "You’re the most special person in my life ❤️",
  "I don’t want to lose you, ever 😒",
  "I don’t need anyone else, just you 🥰",
  "You’re my everything and my forever ❤️",
  "You're simply the best baby!! 💖",
  "I miss you whenever something good happens 🤗",
  "Every moment with you feels like magic 💓",
  "Even in tough times, you’re my strength ❤️",
  "We’ve overcome so much, together forever 🥰",
  "You’re the most important person in my life 💖",
  "This entire love story is ours, my love ❤️",
  "You’re my unconditional love, my forever person 💕",
  "Take care of the one who loves you most ❤️",
  "In my love’s binary world, you’re my only '1' 🥰",
  "Thank God for bringing us together 🙏",
  "You’re the love of my life, my forever ❤️",
  "I love you more than words can say ❤️"
];

const ulEl = document.querySelector("ul");
const d = new Date();
let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
let activeIndex = daynumber;
const rotate = -360 / febHolidays.length;

init();

function init() {
  febHolidays.forEach((holiday, idx) => {
    const liEl = document.createElement("li");
    liEl.style.setProperty("--day_idx", idx);
    liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1}</time><span>${holiday}</span>`;
    ulEl.append(liEl);
  });
  ulEl.style.setProperty("--rotateDegrees", rotate);
  adjustDay(0);
}

function adjustDay(nr) {
  daynumber += nr;
  ulEl.style.setProperty("--currentDay", daynumber);
  const activeEl = document.querySelector("li.active");
  if (activeEl) activeEl.classList.remove("active");
  activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
  const newActiveEl = document.querySelector(`li:nth-child(${activeIndex + 1})`);
  document.body.style.backgroundColor = window.getComputedStyle(newActiveEl).backgroundColor;
  newActiveEl.classList.add("active");
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      adjustDay(-1);
      break;
    case "ArrowDown":
      adjustDay(1);
      break;
    default:
      return;
  }
});
