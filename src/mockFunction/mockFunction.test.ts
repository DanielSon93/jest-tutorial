import { obj } from "./mockFunction";

// test("spy를 심고 해당 함수를 실행시키지 않는 방법", () => {
//   // mockImplementation을 사용해 함수 호출 X
//   jest.spyOn(obj, "sum").mockImplementation();
//   obj.sum(1, 2);
//   expect(obj.sum).toHaveBeenCalledTimes(1);
// });

test("sum 함수를 a, b 인자를 받아 빼주는 함수로 갈아끼우기", () => {
  // 기존의 a, b 인자를 받아 더해주는 sum 함수를 a, b 인자를 받아 빼주는 함수로 갈아끼우기
  jest.spyOn(obj, "sum").mockImplementation((a, b) => a - b);
  const resultSum = obj.sum(1, 2);
  expect(obj.sum).toHaveBeenCalledTimes(1);
  expect(resultSum).toBe(-1);
});

// test("mockImplementationOnce를 사용해 함수 호출 시 갈아끼울 가짜 함수를 지정", () => {
//   jest
//     .spyOn(obj, "sum")
//     .mockImplementationOnce((a, b) => a - b) // 처음 호출할 때는 뺄셈
//     .mockImplementationOnce(() => 5); // 두번째 호출할 때는 5
//   // 마지막 호출은 원래 함수 로직 적용

//   // 3번 호출
//   const resultSum1 = obj.sum(1, 2);
//   const resultSum2 = obj.sum(1, 2);
//   const resultSum3 = obj.sum(1, 2);

//   // 3번 호출 시 성공
//   expect(obj.sum).toHaveBeenCalledTimes(3);

//   // 호출한 결과값 예상
//   expect(resultSum1).toBe(-1);
//   expect(resultSum2).toBe(5);
//   expect(resultSum3).toBe(3);
// });
