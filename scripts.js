/* Keywords

action
adventure
arcade
battle royale
build
busy
car
classic
cooking
dark
driving
educational
elegant
epic
farm
fight
fighting
fps
gacha
happy
history
horror
indie
kids
logic
logical
modern
mysterious
peaceful
platform
puzzle
quirky
racing
relaxing
roleplay
scary
shooter
simulator
sports
strategy
survival
teams
tense
trivia
zombie

*/

// Questionnaire
const submit = document.getElementById("submit");
const keywords = [];

// Questions will be asked
const Questions = [
  {
    id: 0,
    q: "It’s Saturday night, what are you up to?",
    a: [
      { text: "Creating something", keywords: ["creative"] },
      { text: "Hosting 3-course curated dinners", keywords: ["cooking"] },
      { text: "Making a warm cup of tea", keywords: ["cozy"] },
      {
        text: "Catching up with friends or volunteering",
        keywords: ["outdoors", "friendship"],
      },
      { text: "Going on a date", keywords: ["romantic"] },
    ],
  },
  {
    id: 1,
    q: "When do you have the best energy?",
    a: [
      { text: "6am-12pm", keywords: ["farm"] },
      { text: "12pm-6pm", keywords: ["happy"] },
      { text: "6pm-Midnight", keywords: ["busy"] },
      { text: "Midnight-6am", keywords: ["dark"] },
    ],
  },
  {
    id: 2,
    q: "What are you watching on Netflix?",
    a: [
      { text: "Gilmore Girls", keywords: ["family"] },
      { text: "Parks & Rec", keywords: ["humor"] },
      { text: "Always Be My Maybe", keywords: ["romantic"] },
      { text: "Tales by Light", keywords: ["adventure"] },
    ],
  },
  {
    id: 3,
    q: "You can listen just one singer for the rest of your life:",
    a: [
      { text: "Michael Jackson", keywords: ["creative"] },
      { text: "Eminem", keywords: ["energy"] },
      { text: "Taylor Swift", keywords: ["happy"] },
      { text: "Metallica", keywords: ["fighting"] },
    ],
  },
  {
    id: 4,
    q: "What’s your decision-making style?",
    a: [
      { text: "I often put off making decisions", keywords: ["lazy"] },
      {
        text: "I spend a lot of time writing pros and cons",
        keywords: ["logic"],
      },
      {
        text: "I trust myself to make decisions quickly and easily",
        keywords: ["action"],
      },
      { text: "Deciwhat?", keywords: ["long"] },
    ],
  },
  {
    id: 5,
    q: "If you could live anywhere, where would you live?",
    a: [
      { text: "New York", keywords: ["competitive"] },
      { text: "Spain", keywords: ["relaxing"] },
      { text: "Los Angeles", keywords: ["creative"] },
      { text: "Rome", keywords: ["history"] },
    ],
  },
  {
    id: 6,
    q: "Which best describes your style?",
    a: [
      { text: "Free spirit", keywords: ["mysterious"] },
      { text: "Bold", keywords: ["soft"] },
      { text: "Casual", keywords: ["casual"] },
      { text: "Minimal", keywords: ["minimalist"] },
    ],
  },
  {
    id: 7,
    q: "What font style do you like most?",
    a: [
      { text: "Modern and clean", keywords: ["modern"] },
      { text: "Classic editorial", keywords: ["classic"] },
      { text: "Handwriting", keywords: ["playful"] },
      { text: "Curly cursive", keywords: ["elegant"] },
    ],
  },
  {
    id: 8,
    q: "What is your favorite social media network?",
    a: [
      { text: "Twitter", keywords: ["tense"] },
      { text: "Facebook", keywords: ["familiar"] },
      { text: "Instagram", keywords: ["simulator"] },
      { text: "LinkedIn", keywords: ["logic"] },
    ],
  },
  {
    id: 9,
    q: "What is your kryptonite?",
    a: [
      { text: "Procrastination", keywords: ["relaxing"] },
      { text: "Lack of focus", keywords: ["easy"] },
      { text: "Perfectionism", keywords: ["strategy"] },
      { text: "Self-doubt", keywords: ["gacha"] },
    ],
  },
  {
    id: 10,
    q: "Is the glass half-empty or half-full?",
    a: [
      { text: "My cup runneth over", keywords: ["action"] },
      { text: "Half-empty and I need a smaller cup", keywords: ["arcade"] },
      { text: "My cup is never full", keywords: ["dark"] },
      { text: "Half-full and I want to fill it up", keywords: ["educational"] },
    ],
  },
  {
    id: 11,
    q: "Where do you get your best ideas?",
    a: [
      { text: "In the shower", keywords: ["strategy"] },
      { text: "Driving in the car", keywords: ["car"] },
      { text: "At my desk", keywords: ["fps"] },
      { text: "At the gym", keywords: ["sports"] },
    ],
  },
  {
    id: 12,
    q: "What happens when your alarm goes off?",
    a: [
      { text: "I’m wide awake and filled with energy", keywords: ["energic"] },
      { text: "I wonder who set the alarm", keywords: ["horror"] },
      { text: "I roll over for just a few more ZZZ’s", keywords: ["cozy"] },
      { text: "I make myself a cup of coffee", keywords: ["survival"] },
    ],
  },
  {
    id: 13,
    q: "Pick an amusement park ride",
    a: [
      { text: "Rollercoaster", keywords: ["adrenaline"] },
      { text: "Carousel", keywords: ["kids"] },
      { text: "A water ride", keywords: ["racing"] },
      { text: "Bumper cars", keywords: ["teams"] },
    ],
  },
  {
    id: 14,
    q: "What’s your favorite form of exercise?",
    a: [
      { text: "Outdoor activities", keywords: ["adventure"] },
      { text: "Martial arts", keywords: ["fight"] },
      { text: "Gym routines", keywords: ["build"] },
      { text: "Exerwhat?", keywords: ["cooking"] },
    ],
  },
  {
    id: 15,
    q: "What Is Your Ideal Picnic Scene?",
    a: [
      { text: "The Beach", keywords: ["peaceful"] },
      { text: "The Park", keywords: ["outdoors"] },
      { text: "The Rooftop", keywords: ["relaxing"] },
      { text: "Mountaintop", keywords: ["adventure"] },
    ],
  },
  {
    id: 16,
    q: "How would you spend a free day?",
    a: [
      { text: "Learning a new skill", keywords: ["dyi"] },
      { text: "An outdoors activity", keywords: ["adventure"] },
      { text: "Having a dinner away", keywords: ["elegant"] },
      { text: "Playing videogames", keywords: ["arcade"] },
    ],
  },
  {
    id: 17,
    q: "Which picture is the most inviting? (go with your first instinct)",
    a: [
      { text: "Road tripping with a friend", keywords: ["competitive"] },
      { text: "A truck full of flowers", keywords: ["relaxing"] },
      { text: "A puppy", keywords: ["animals"] },
      { text: "A beach at sunset", keywords: ["beach"] },
    ],
  },
  {
    id: 18,
    q: "How outspoken do you consider yourself?",
    a: [
      { text: "I'm shy but can be around people", keywords: ["mysterious"] },
      { text: "I can be loud but also enjoy quiet", keywords: ["strategy"] },
      {
        text: "I’m pretty much the loudest person in every room",
        keywords: ["open", "epic"],
      },
      { text: "I hate people", keywords: ["zombie", "tense"] },
    ],
  },
  {
    id: 19,
    q: "Which describes you best when you're with your friends?",
    a: [
      { text: "I take charge", keywords: ["family"] },
      { text: "I follow the flow", keywords: ["humor"] },
      { text: "I'm quite serious", keywords: ["romantic"] },
      { text: "I'm a good listener", keywords: ["adventure"] },
    ],
  },
  {
    id: 20,
    q: "If you woke up tomorrow being excellent in a completely new field, what would you like to be?",
    a: [
      { text: "A musician", keywords: ["energy"] },
      { text: "An e-sports star", keywords: ["happy"] },
      {
        text: "A doctor discovering a new treatment for cancer",
        keywords: ["busy"],
      },
      { text: "Nvm I'm good, thanks", keywords: ["dark"] },
    ],
  },
  {
    id: 21,
    q: "Where do you get your best ideas?",
    a: [
      { text: "In the shower", keywords: ["family"] },
      { text: "Driving in the car", keywords: ["humor"] },
      { text: "At my desk", keywords: ["romantic"] },
      { text: "At the gym", keywords: ["adventure"] },
    ],
  },
];

// Set start
var start = true;

// Iterate
function iterate(id) {
  // Getting the question
  const question = document.getElementById("question");

  // Setting the question text
  question.innerText = Questions[id].q;

  // Getting the options
  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");
  const op3 = document.getElementById("op3");
  const op4 = document.getElementById("op4");

  // Providing option text
  op1.innerText = Questions[id].a[0].text;
  op2.innerText = Questions[id].a[1].text;
  op3.innerText = Questions[id].a[2].text;
  op4.innerText = Questions[id].a[3].text;

  var selected = "";
}

// Next question

if (start) {
  iterate("0");
}

let id = 0;
let options = document.getElementsByClassName("option");
let uniqKeywords = [];

console.log(Questions);
console.log(Questions.length);

for (let i = 0; i < 4; i++) {
  options[i].addEventListener("click", () => {
    start = false;

    if (id + 1 < Questions.length) {
      console.log("you answered the question number " + (id + 1));
      console.log(Questions[id].a[i].keywords);
      keywords.push(...Questions[id].a[i].keywords);
      id++;
      iterate(id);
    } else if (id + 1 === Questions.length) {
      keywords.push(...Questions[id].a[i].keywords);
      console.log("you answered the question number " + (id + 1));
      console.log("end of test");
      console.log(keywords);
      submit.classList.add("show");

      // remove duplicate keywords
      uniqKeywords = keywords.reduce(function (a, b) {
        if (a.indexOf(b) < 0) a.push(b);
        return a;
      }, []);

      console.log(uniqKeywords);

      console.log(uniqKeywords[1]);
      let stringKeywords = uniqKeywords[0];
      for (let i = 1; i < uniqKeywords.length; i++) {
        stringKeywords = `${stringKeywords + "," + uniqKeywords[i]}`;
      }

      console.log("string keywords = " + stringKeywords);

      const gameCard = document.getElementById("gameCard");
      const gameCardWrapper = document.getElementById("gameCardWrapper");
      const prevButton = document.getElementById("slide-arrow-prev");
      const nextButton = document.getElementById("slide-arrow-next");

      let pageNumber = 1;
      let API_URL = `https://api.rawg.io/api/games?key=0184e37f47674da7b331ff365749c661&tags=${stringKeywords}&page_size=50&page=${pageNumber}`;

      const getGameCard = () => {
        gameCardWrapper.classList.add("show");
        fetch(`${API_URL}`)
          .then((res) => res.json())
          .then((data) => {
            data.results.forEach(function (game) {
              console.log(game);
              gameCard.innerHTML += `<li class="gameSlide" style="background-color: #${game.dominant_color}"><h2>${game.name}</h2><img src="${game.background_image}"></li>`;
            });
          });
      };

      submit.addEventListener("click", getGameCard);
      // nextButton.addEventListener("click", () => {
      //   pageNumber++;
      //   API_URL = `https://api.rawg.io/api/games?key=0184e37f47674da7b331ff365749c661&tags=${stringKeywords}&page_size=1&page=${pageNumber}`;
      //   getGameCard();
      // });
    }
  });
}
