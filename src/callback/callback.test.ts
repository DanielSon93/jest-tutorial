import { timer } from "./callback";

test("callback 함수 테스트", (done) => {
  timer((message: string) => {
    expect(message).toBe("hello");
    done();
  });
});
