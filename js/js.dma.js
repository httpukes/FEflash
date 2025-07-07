const flashcard = document.getElementById("flashcard");
const frontImg = document.getElementById("front-image");
const backImg = document.getElementById("back-image");
const nextBtn = document.getElementById("next-btn");

const cards = [
  { front: "images/DMA/DMA SUM25.png", back: "images/DMA SOL/DMA SUM25 SOL.png" },
  { front: "images/myquestion2.png", back: "images/myanswer2.png" },
  { front: "images/myquestion3.png", back: "images/myanswer3.png" }
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
}
