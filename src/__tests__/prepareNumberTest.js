import prepareNumber from '../js/prepareNumber';

test.each([
  ['correct russian number prefix', '+7 960 000 00 00', '+79600000000'],
  ['uncorrect russian number prefix', '8 (927) 000-00-00', '+79270000000'],
  ['abroad number prefix', '+86 000 000 0000', '+860000000000'],
])('test %s with value %i', (_, number, expected) => {
  const result = prepareNumber(number);

  expect(result).toBe(expected);
});
