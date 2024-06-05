const btns = document.querySelectorAll("button");
const cards = document.querySelectorAll(".card");

const cardsFilter = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  cards.forEach((card) => {
    card.classList.add("filtre");
  });
};

btns.forEach((button) => button.addEventListener("click", cardsFilter));
