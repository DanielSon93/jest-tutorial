import { err, customErr, ErrClass } from "./throwError";

test("throw new Error 테스트", () => {
  expect(() => err()).toThrow(Error);
  expect(() => customErr()).toThrow(ErrClass);
});

test("throw new Error 테스트(try/catch)", () => {
  try {
    err();
  } catch (error) {
    expect(error).toStrictEqual(new Error());
  }
});
