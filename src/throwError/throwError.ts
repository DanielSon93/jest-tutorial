export function err() {
  throw new Error();
}

export class ErrClass extends Error {}
export function customErr() {
  throw new ErrClass();
}
