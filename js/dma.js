const flashcard = document.getElementById("flashcard");
const frontImg = document.getElementById("front-image");
const backImg = document.getElementById("back-image");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

const cards = [
  { front: "images/DMA MAS/DMA/DMA SUM25.png", back: "images/DMA MAS/DMA SOL/DMA SUM25 SOL.png", average: "53.8%" },
  { front: "images/DMA MAS/DMA/DMA SP25.png", back: "images/DMA MAS/DMA SOL/DMA SP25 SOL.png" , average: "59.4%"},
  { front: "images/DMA MAS/DMA/DMA FA24.png", back: "images/DMA MAS/DMA SOL/DMA FA24 SOL.png",average: "39.7%" },
  { front: "images/DMA MAS/DMA/DMA SUM24.png", back: "images/DMA MAS/DMA SOL/DMA SUM24 SOL.png" , average: "60.9%"},
  { front: "images/DMA MAS/DMA/DMA SP24.png", back: "images/DMA MAS/DMA SOL/DMA SP24 SOL.png", average: "63.1%" },
  { front: "images/DMA MAS/DMA/DMA FA23.png", back: "images/DMA MAS/DMA SOL/DMA FA23 SOL.png", average: "57.3%"},


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
