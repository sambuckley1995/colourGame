import { renderScore } from "./main";

describe("test renderScore function", () => {
  test("ensures score is rendering to page correctly", () => {
    renderScore();
    let scoreDisplay = document.getElementById("score").innerHTML;
    expect(scoreDisplay).toBe("Score: 0");
  });
});
