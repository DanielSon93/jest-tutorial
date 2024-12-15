test("복잡한 인자를 가진 함수 테스트", () => {
  const fn = jest.fn();
  fn({
    a: {
      b: {
        c: {
          d: {
            e: {
              f: "finally",
            },
          },
        },
      },
    },
  });

  // 의미없는 테스트
  expect(fn).toHaveBeenCalledWith({
    a: {
      b: {
        c: {
          d: {
            e: {
              f: "finally",
            },
          },
        },
      },
    },
  });

  // 중요한 데이터를 확인하는 방식으로 조금 더 의미있는 테스트 진행
  expect(fn.mock.calls[0][0].a.b.c.d.e.f).toBe("finally");
});
