import { sum } from "./toHaveBeenCalled";

test("toHaveBeenCalled를 사용한 호출 여부 확인", () => {
  // jest에서 감시할 함수 지정
  const sumSpy = jest.fn(sum);
  // sum 함수를 직접 호출하는것이 아닌 sumSpy를 호출
  sumSpy(1, 2);
  // sum 함수가 호출 되었는지 확인
  expect(sumSpy).toHaveBeenCalled();
});
