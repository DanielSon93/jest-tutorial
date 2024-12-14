export function dateAfterThreeDays() {
  const date = new Date();
  date.setDate(date.getDate() + 3);
  return date;
}
