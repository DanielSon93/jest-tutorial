/**
 * sum 함수 import
 */
import { sum } from "./toBe";

/**
 * 1. test의 첫번째 인자는 해당 테스트에 대한 설명 작성
 * 2. expect에 테스트 할 sum 함수를 넣어준 뒤에 toBe에서 원하는 값이 나오는지 확인
 *  */
test("sum 함수는 두 수를 더합니다", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, 2)).not.toBe(2);
});
