import { obj } from "./mockReturnValue";

test("mockReturnValueOnce를 사용해 반환할 값 딱 한번만 변경", () => {
  // return 값으로 5 지정
  jest
    .spyOn(obj, "sum")
    .mockReturnValueOnce(5)
    .mockReturnValueOnce(6)
    .mockReturnValueOnce(7);

  // 3번 호출
  const resultSum1 = obj.sum(1, 2);
  const resultSum2 = obj.sum(1, 2);
  const resultSum3 = obj.sum(1, 2);

  expect(obj.sum).toHaveBeenCalledTimes(3);

  // 호출한 결과값 예상
  expect(resultSum1).toBe(5);
  expect(resultSum2).toBe(6);
  expect(resultSum3).toBe(7);
});
