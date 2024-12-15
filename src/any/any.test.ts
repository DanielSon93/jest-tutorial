import { randomNumber } from "./any";

test("반환값은 숫자여야 한다", () => {
  expect(randomNumber()).toStrictEqual(expect.any(Number));
});
