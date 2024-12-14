export function timer(callback) {
  setTimeout(() => {
    callback("hello");
  }, 10 * 1000);
}
