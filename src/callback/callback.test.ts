import { timer } from "./callback";

test("callback 함수 테스트", (done) => {
  jest.useFakeTimers();
  expect.assertions(1);
  timer((message: string) => {
    expect(message).toBe("hello");
    done();
  });
  // 타이머 함수 즉시 실행
  // jest.runAllTimers();
  // 타이머 함수의 시간을 10초 앞당기기
  jest.advanceTimersByTime(10_000);
});
