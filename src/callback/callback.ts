export function timer(callback) {
  setTimeout(() => {
    callback("hello");
  }, 3000);
}
