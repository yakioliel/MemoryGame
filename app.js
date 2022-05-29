//grab a couple of things
const section = document.querySelector("section");
const playerLiveCount = document.querySelector("span");
const mutch = document.querySelector(".mutch");
let playerLive = 0;

//LInk text
playerLiveCount.innerHTML = playerLive;

//Generate the data
const getData = () => [
  { imgSrc: "./img/1.jpg", name: "1" },
  { imgSrc: "./img/2.jpg", name: "2" },
  { imgSrc: "./img/3.jpg", name: "3" },
  { imgSrc: "./img/4.jpg", name: "4" },
  { imgSrc: "./img/5.jpg", name: "5" },
  { imgSrc: "./img/6.jpg", name: "6" },
  { imgSrc: "./img/7.jpg", name: "7" },
  { imgSrc: "./img/8.jpg", name: "8" },
  { imgSrc: "./img/9.jpg", name: "9" },
  { imgSrc: "./img/10.jpg", name: "10" },
  { imgSrc: "./img/1.jpg", name: "1" },
  { imgSrc: "./img/2.jpg", name: "2" },
  { imgSrc: "./img/3.jpg", name: "3" },
  { imgSrc: "./img/4.jpg", name: "4" },
  { imgSrc: "./img/5.jpg", name: "5" },
  { imgSrc: "./img/6.jpg", name: "6" },
  { imgSrc: "./img/7.jpg", name: "7" },
  { imgSrc: "./img/8.jpg", name: "8" },
  { imgSrc: "./img/9.jpg", name: "9" },
  { imgSrc: "./img/10.jpg", name: "10" },
];

//Randomize
const Randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  console.log(cardData);
  return cardData;
};

//card generator function
const cardGenerator = () => {
  const cardData = Randomize();
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");

    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

    //add img to every card
    face.src = item.imgSrc;
    //לקבל את השם של כל כרטיסייה
    card.setAttribute("name", item.name);
    //add card to html section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCard(e);
    });
  });
};

//check cards
const checkCard = (e) => {
  console.log(e);
  const clickCard = e.target;
  //add class 'flipped' for .card
  clickCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  console.log(flippedCards);

  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      //LInk text
      playerLive++;
      playerLiveCount.innerHTML = playerLive;
      mutch.innerHTML = `${playerLive} <br>👏`;
      mutch.style.display = "block";
      setTimeout(() => {
        mutch.style.display = "none";
      }, 2000);
      console.log("match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      console.log("worong");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
    }
  }
};

cardGenerator();
