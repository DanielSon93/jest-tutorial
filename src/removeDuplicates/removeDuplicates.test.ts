import { obj } from "./removeDuplicates";

describe("beforeEach, afterEach 적용하는 테스트", () => {
  test("spy를 심고 해당 함수를 실행시키지 않는 방법", () => {
    const spyFn = jest.spyOn(obj, "sum").mockImplementation();
    obj.sum(1, 2);
    expect(obj.sum).toHaveBeenCalledTimes(1);
  });

  test("sum 함수를 a, b 인자를 받아 빼주는 함수로 갈아끼우기", () => {
    const spyFn = jest.spyOn(obj, "sum").mockImplementation((a, b) => a - b);
    const resultSum = obj.sum(1, 2);
    expect(obj.sum).toHaveBeenCalledTimes(1);
    expect(resultSum).toBe(-1);
  });
});

test.skip("mockImplementationOnce를 사용해 함수 호출 시 갈아끼울 가짜 함수를 지정", () => {
  const spyFn = jest
    .spyOn(obj, "sum")
    .mockImplementationOnce((a, b) => a - b)
    .mockImplementationOnce(() => 5);

  const resultSum1 = obj.sum(1, 2);
  const resultSum2 = obj.sum(1, 2);
  const resultSum3 = obj.sum(1, 2);

  expect(obj.sum).toHaveBeenCalledTimes(3);

  expect(resultSum1).toBe(-1);
  expect(resultSum2).toBe(5);
  expect(resultSum3).toBe(3);
  // spyFn.mockRestore();
});

beforeEach(() => {
  jest.restoreAllMocks();
  console.log("beforeEach 실행");
});

afterEach(() => {
  console.log("afterEach 실행");
});

beforeAll(() => {
  console.log("beforeAll 실행");
});

afterAll(() => {
  console.log("afterAll 실행");
});
