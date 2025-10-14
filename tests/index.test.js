const { soma, subtrai } = require('../src/index');

test('soma dois números corretamente', () => {
  expect(soma(2, 3)).toBe(5);
});

test('subtrai dois números corretamente', () => {
  expect(subtrai(5, 2)).toBe(3);
});
