import { mockData } from "./moduleMocking";

jest.mock("./moduleMocking");

test("하나씩 mocking 진행", () => {
  jest.replaceProperty(mockData, "age", 20);
  const origin = jest.requireActual("./moduleMocking").mockData;
  console.log(origin);
  console.log(mockData);
});
