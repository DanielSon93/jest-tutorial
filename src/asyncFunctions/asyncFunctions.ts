import {
  successPromise,
  failPromise,
  successAsync,
  failAsync,
} from "./asyncFunctions.test";

test("successPromise 테스트", () => {
  expect(successPromise()).resolves.toBe("success");
});
