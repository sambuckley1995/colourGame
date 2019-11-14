import * as functions from "./main";

describe("test renderScore function", () => {
  test("ensures score is rendering to page correctly", () => {
    functions.renderScore(score);
    let scoreDisplay = document.getElementById("score").innerHTML;
    let score = 6;
    expect(scoreDisplay).toBe("Score: 6");
  });
});
