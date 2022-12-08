import {
  iterate,
  getUniqKeywords,
  likedCard,
  dislikedCard,
} from "./functions.js";

// Test the iterate function
test("iterate updates question and options", () => {
  // Mock the required DOM elements
  document.body.innerHTML = `
      <div id="question"></div>
      <button id="op1"></button>
      <button id="op2"></button>
      <button id="op3"></button>
      <button id="op4"></button>
    `;
  iterate(1);
  expect(question.innerHTML).toBe("When do you have the best energy?");
  expect(op1.innerHTML).toBe("6am-12pm");
  expect(op2.innerHTML).toBe("12pm-6pm");
  expect(op3.innerHTML).toBe("6pm-Midnight");
  expect(op4.innerHTML).toBe("Midnight-6am");
});

// Test the reducing keywords function
test("getUniqKeywords removes duplicates from list", () => {
  let myArray = getUniqKeywords(["adventure", "farm", "farm"]);
  expect(myArray).toEqual(["adventure", "farm"]);
});

jest.useFakeTimers();

test("card gets liked", async () => {
  document.body.innerHTML = `<input id="likeInput"><ul id="liked"></ul><ul id="gameCard">
  <li><span class="gameId">123</span></li></ul>`;
  likedCard();
  jest.advanceTimersByTime(50);
  expect(liked.innerHTML).toBe(
    `<li class="liked"><span class="gameId">123</span></li>`
  );
});

test("card gets disliked", async () => {
  document.body.innerHTML = `<input id="likeInput"><ul id="disliked"></ul><ul id="gameCard">
  <li><span class="gameId">123</span></li></ul>`;
  dislikedCard();
  jest.advanceTimersByTime(50);
  expect(disliked.innerHTML).toBe(
    `<li class="disliked"><span class="gameId">123</span></li>`
  );
});
