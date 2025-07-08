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
let filteredCards = [...cards];

flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});


nextBtn.addEventListener("click", () => {
  flashcard.classList.remove("flipped");
  current = (current + 1) % filteredCards.length;
  updateCard();
});


prevBtn.addEventListener("click", () => {
  flashcard.classList.remove("flipped");
  current = (current - 1 + filteredCards.length) % filteredCards.length;
  updateCard();
});


function updateCard() {

  const noCardsImg = document.getElementById("no-cards-image");

  if (filteredCards.length === 0) {
    frontImg.src = "";
    backImg.src = "";
    flashcard.style.display = "none";
    noCardsImg.style.display = "block";
    document.getElementById("info-text").textContent = "No cards found.";
    return;
  }

  flashcard.style.display = "block";
  noCardsImg.style.display = "none";


  frontImg.src = filteredCards[current].front;
  backImg.src = filteredCards[current].back;
  document.getElementById("info-text").textContent = `Average: ${filteredCards[current].average}`;
  flashcard.classList.remove("flipped");
}

function getDifficulty(avgStr) {
  const avg = parseFloat(avgStr);
  if (avg < 40) return "hard";
  if (avg < 70) return "medium";
  return "easy";
}

document.querySelectorAll(".difficulty-filter button").forEach(btn => {
  btn.addEventListener("click", () => {
    const level = btn.getAttribute("data-difficulty");

    if (level === "all") {
      filteredCards = [...cards]; 
    } else {
      filteredCards = cards.filter(card => getDifficulty(card.average) === level);
    }

    current = 0;
    updateCard();
  });
});


updateCard();
