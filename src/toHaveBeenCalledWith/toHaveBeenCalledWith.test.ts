import { obj } from "./toHaveBeenCalledWith";

test("함수 내부에 spy를 심는 방법", () => {
  jest.spyOn(obj, "sum");
  obj.sum(1, 2);
  console.log(obj.sum);
  expect(obj.sum).toHaveBeenCalledWith(1, 2);
});
