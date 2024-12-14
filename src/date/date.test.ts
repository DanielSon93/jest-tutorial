import { dateAfterThreeDays } from "./date";

test("날짜 비교 테스트", () => {
  // 가짜 시간 생성
  jest.useFakeTimers().setSystemTime(new Date(2024, 12, 12));
  // dateAfterThreeDays() 호출 시 가짜 시간 기준 3일 후의 시간을 반환
  expect(dateAfterThreeDays()).toStrictEqual(new Date(2024, 12, 15));
});

afterEach(() => {
  // 다른 테스트에 영향을 미칠 수 있기 때문에 초기화
  jest.useRealTimers();
});
