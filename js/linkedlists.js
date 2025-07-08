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
