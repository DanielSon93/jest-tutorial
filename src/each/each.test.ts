test("덧셈1", () => {
  expect(1 + 2).toBe(3);
});

test("덧셈2", () => {
  expect(3 + 4).toBe(7);
});

test("덧셈3", () => {
  expect(5 + 6).toBe(11);
});

test.each([
  [1, 2, 3],
  [3, 4, 7],
  [5, 6, 11],
])("%i + %i = %i", (a, b, c) => {
  expect(a + b).toBe(c);
});

test.each([
  { a: 1, b: 2, c: 3 },
  { a: 3, b: 4, c: 7 },
  { a: 5, b: 6, c: 11 },
])("$a + $b = $c", ({ a, b, c }) => {
  expect(a + b).toBe(c);
});
