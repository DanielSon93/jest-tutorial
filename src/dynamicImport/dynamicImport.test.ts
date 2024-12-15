test("dynamic import 테스트1", async () => {
  const c = await import("./dynamicImport");
  (c as any).prop = "new prop";
  expect(c).toBeDefined();
});

test.only("dynamic import 테스트2", async () => {
  const c = await import("./dynamicImport");
  expect((c as any).prop).toBe("new prop");
});
