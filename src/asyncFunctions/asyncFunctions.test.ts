export function successPromise() {
  return Promise.resolve("success");
}

export function failPromise() {
  return Promise.reject("fail");
}

export async function successAsync() {
  return "success";
}

export async function failAsync() {
  throw "fail";
}
