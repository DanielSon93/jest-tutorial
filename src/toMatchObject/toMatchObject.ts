class MatchObject {
  name: string;

  constructor(str: string) {
    this.name = str;
  }
}

export function obj(str: string) {
  return new MatchObject(str);
}
