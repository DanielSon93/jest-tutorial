import { obj } from "./toMatchObject";

test("toMatchObject을 사용한 객체 값 비교", () => {
  expect(obj("daniel")).toMatchObject({ name: "daniel" });
  expect(obj("daniel")).not.toStrictEqual({ name: "daniel" });
});
