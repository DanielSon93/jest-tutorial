import { first, second, third } from "./order";

// jest-extende를 사용해 함수 호출 순서 확인
test("jest-extende를 사용해 함수 호출 순서 확인", () => {
  const spy1 = jest.fn(first);
  const spy2 = jest.fn(second);
  const spy3 = jest.fn(third);

  spy1();
  spy2();
  spy3();

  // expect(spy1.mock.invocationCallOrder[0]).toBeLessThan(
  //   spy2.mock.invocationCallOrder[0]
  // );
  expect(spy1).toHaveBeenCalledBefore(spy2);

  // expect(spy3.mock.invocationCallOrder[0]).toBeGreaterThan(
  //   spy2.mock.invocationCallOrder[0]
  // );
  expect(spy3).toHaveBeenCalledAfter(spy2);
});
