import * as asynfnc from "./asyncFunctions";

test("async/await 사용한 방식", async () => {
  expect.assertions(1);
  jest.spyOn(asynfnc, "successPromise").mockResolvedValue("success");
  return expect(asynfnc.successPromise()).resolves.toBe("success");
});
