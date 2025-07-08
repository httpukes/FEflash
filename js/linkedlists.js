const flashcard = document.getElementById("flashcard");
const frontImg = document.getElementById("front-image");
const backImg = document.getElementById("back-image");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

const cards = [
  { front: "images/LL MAS/LL/LL SUM25.png", back: "images/LL MAS/LL SOL/LL SUM25 SOL.png", average: "43.8%" },
  { front: "images/LL MAS/LL/LL SP25.png", back: "images/LL MAS/LL SOL/LL SP25 SOL.png", average: "23.9%" },
  { front: "images/LL MAS/LL/LL FA24.png", back: "images/LL MAS/LL SOL/LL FA24 SOL.png", average: "45.1%" },
  { front: "images/LL MAS/LL/LL SUM24.png", back: "images/LL MAS/LL SOL/LL SUM24 SOL.png", average: "64.8%" },
  { front: "images/LL MAS/LL/LL SP24.png", back: "images/LL MAS/LL SOL/LL SP24 SOL.png", average: "51.4%" },
  { front: "images/LL MAS/LL/LL FA23.png", back: "images/LL MAS/LL SOL/LL FA23 SOL.png", average: "84.0%" },
  { front: "images/LL MAS/LL/LL SUM23.png", back: "images/LL MAS/LL SOL/LL SUM23 SOL.png", average: "76.3%" },

];

let current = 0;

flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});


nextBtn.addEventListener("click", () => {
  flashcard.classList.remove("flipped");
  current = (current + 1) % cards.length;
  updateCard();
});


prevBtn.addEventListener("click", () => {
  flashcard.classList.remove("flipped");
  current = (current - 1 + cards.length) % cards.length;
  updateCard();
});



function updateCard() {
  frontImg.src = cards[current].front;
  backImg.src = cards[current].back;
  document.getElementById("info-text").textContent = `Average: ${cards[current].average}`;
  flashcard.classList.remove("flipped");
}

updateCard();
