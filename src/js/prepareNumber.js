export default function prepareNumber(number) {
  let result = number.replace(/\+/, '');
  if (/^8\s/.test(result)) {
    result = result.replace(/^8/, 7);
  }
  return `+${result.replace(/[^0-9]/g, '')}`;
}
