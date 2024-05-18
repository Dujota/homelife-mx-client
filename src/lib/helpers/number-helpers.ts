export function formatFloats(num: number | string) {
  if (typeof num === "string") {
    const parsedNum = parseFloat(num);
    if (isNaN(parsedNum)) return "";
    num = parsedNum;
  }
  return Number.isInteger(num) ? Math.floor(num) : num;
}
