import { sum } from "./toHaveBeenCalledTimes";

test("jest.fn을 사용해 spy함수 생성", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalledTimes(1);
});
