import {
  iterate,
  Questions,
  getUniqKeywords,
  likedCard,
  dislikedCard,
} from "./functions.js";

// Set start
var start = true;

// Next question
if (start) {
  iterate("0");
}

let id = 0;
let options = document.getElementsByClassName("option");
const keywords = [];
let uniqKeywords = [];
let stringKeywords = "";
let pageNumber = 0;
let API_URL = `https://api.rawg.io/api/games?key=0184e37f47674da7b331ff365749c661`;
const gameCardWrapper = document.getElementById("gameCardWrapper");
const testContainer = document.getElementById("testContainer");
const gameCard = document.getElementById("gameCard");
const submit = document.getElementById("submitTest");
const seeMoreGames = document.getElementById("seeMoreGames");
const like = document.getElementById("like");
const dislike = document.getElementById("dislike");

const getGameCard = () => {
  pageNumber++;
  gameCardWrapper.classList.add("show");
  testContainer.classList.remove("show");
  submit.classList.remove("show");
  fetch(
    `${API_URL + `&tags=${stringKeywords}&page_size=20&page=${pageNumber}`}`
  )
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach(function (game) {
        console.log(game);
        gameCard.innerHTML += `<li class="gameSlide gamePending"><h3>${game.name}</h3><img src="${game.background_image}" class="gamePic show"><div class="moreInfoContainer"></div><span style="display:none" class="gameId">${game.id}</span></li>`;
        document.getElementById("likeInput").value = `${game.id}`;
      });
    });
};

const getMoreInfo = () => {
  let last = Array.from(document.querySelectorAll(".gameId")).pop();
  let lastPic = Array.from(document.querySelectorAll(".gamePic")).pop();
  let moreInfoContainer = Array.from(
    document.querySelectorAll(".moreInfoContainer")
  ).pop();
  lastPic.classList.remove("show");
  moreInfoContainer.classList.add("show");

  let API_MOREINFO = `https://api.rawg.io/api/games/${last.textContent}?key=0184e37f47674da7b331ff365749c661`;
  fetch(`${API_MOREINFO}`)
    .then((res) => res.json())
    .then((res) => {
      let genres = "unknown";
      for (let i = 0; i < res.genres.length; i++) {
        genres += `, ${res.genres[i].name}`;
      }
      let genresClean = genres.replace("unknown, ", "");

      let platforms = "unknown";
      for (let i = 0; i < res.platforms.length; i++) {
        platforms += `, ${res.platforms[i].platform.name}`;
      }
      let platformsClean = platforms.replace("unknown, ", "");

      moreInfoContainer.innerHTML = `<p class="gameDescription testDescription">${res.description_raw}</p><div class="gameGenre"><p><strong>Genres: </strong>${genresClean}</p></div><div class="gamePlatform"><p><strong>Platforms: </strong>${platformsClean}</p></div>`;
    });
};

like.addEventListener("click", likedCard);
dislike.addEventListener("click", dislikedCard);
submit.addEventListener("click", getGameCard);
seeMoreGames.addEventListener("click", getGameCard);
moreInfo.addEventListener("click", getMoreInfo);

for (let i = 0; i < 4; i++) {
  options[i].addEventListener("click", () => {
    start = false;
    keywords.push(...Questions[id].a[i].keywords);

    if (id + 1 < Questions.length) {
      id++;
      iterate(id);
    } else {
      submit.classList.add("show");
      // console.log("keywords: ", keywords);
      // remove duplicate keywords
      uniqKeywords = getUniqKeywords(keywords);
      // console.log("unique keywords: ", uniqKeywords);
      stringKeywords = uniqKeywords.join(",");
      // console.log("string keywords = ", stringKeywords);
    }
  });
}
