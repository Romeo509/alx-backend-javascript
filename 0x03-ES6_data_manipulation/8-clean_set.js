// function to eturns a string of all the set values that
// start with a specific string (startString).
export default function cleanSet(set, startString) {
  let res = '';
  if (!startString || !startString.length) return res;
  for (const el of set) {
    if (el && el.startsWith(startString)) {
      res += `${el.slice(startString.length)}-`;
    }
  }
  return res.slice(0, res.length - 1);
}
