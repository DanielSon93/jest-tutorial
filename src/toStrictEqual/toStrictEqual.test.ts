import { obj } from "./toStrictEqual";

test("toStrictEqual을 사용한 객체 값 비교", () => {
  expect(obj()).toStrictEqual({ name: "daniel" });
  expect([1, 2, 3]).not.toBe([1, 2, 3]);
});
