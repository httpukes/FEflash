const flashcard = document.getElementById("flashcard");
const frontImg = document.getElementById("front-image");
const backImg = document.getElementById("back-image");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

const cards = [
  { front: "images/STACKS MAS/STACKS/STACKS SUM25.png", back: "images/STACKS MAS/STACKS SOL/STACKS SUM25 SOL.png", average: "59.4%" },
  { front: "images/STACKS MAS/STACKS/STACKS SP25.png", back: "images/STACKS MAS/STACKS SOL/STACKS SP25 SOL.png", average: "88.4%" },
  { front: "images/STACKS MAS/STACKS/STACKS SUM24.png", back: "images/STACKS MAS/STACKS SOL/STACKS SUM24 SOL.png", average: "56.8%" },
  { front: "images/STACKS MAS/STACKS/STACKS SP24.png", back: "images/STACKS MAS/STACKS SOL/STACKS SP24 SOL.png", average: "58.3%" },
  { front: "images/STACKS MAS/STACKS/STACKS FA23.png", back: "images/STACKS MAS/STACKS SOL/STACKS FA23 SOL.png", average: "35.2%" },
  { front: "images/STACKS MAS/STACKS/STACKS SP23.png", back: "images/STACKS MAS/STACKS SOL/STACKS SP23 SOL.png", average: "75.6%" },
  { front: "images/STACKS MAS/STACKS/STACKS FA22.png", back: "images/STACKS MAS/STACKS SOL/STACKS FA22 SOL.png", average: "52.6%" },
  
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
