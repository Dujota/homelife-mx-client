export const capitalizeWord = (string = "") => {
  const firstLetter = string.charAt(0).toUpperCase();
  const restOfString = string.substring(1).toLowerCase();
  return firstLetter + restOfString;
};

export function capitalizeEveryWord(str: string) {
  if (typeof str !== "string") return "";

  return str.replace(/\b[a-z]/g, function (match) {
    return match.toUpperCase();
  });
}
