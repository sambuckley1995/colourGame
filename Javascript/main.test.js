import { renderScore } from "./main";

describe("test renderScore function", () => {
  test("ensures score is rendering to page correctly", () => {
    let score = 0;
    score++;
    renderScore(score);
    let scoreDisplay = document.getElementById("score").innerHTML;
    expect(scoreDisplay).toBe("Score: 1");
    score++;
    renderScore(score);
    scoreDisplay = document.getElementById("score").innerHTML;
    expect(scoreDisplay).toBe("Score: 2");
    score = score + 7;
    renderScore(score);
    scoreDisplay = document.getElementById("score").innerHTML;
    expect(scoreDisplay).toBe("Score: 9");
  });
});
