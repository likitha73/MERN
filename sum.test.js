const sum = require('./test/sum'); // Assuming sum.js is in the test folder

test('add 1 + 4 to equal 5', () => {
  expect(sum(1, 4)).toBe(5);
});

test('Object with added property', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('value is null', () => {
  const n = null;
  expect(n).toBeNull();
});

test('value is defined', () => {
  const a = 1;
  expect(a).toBeDefined();
});

test('url is defined', () => {
  const url = 'sdysdhsd@mongodburl';
  expect(url).toBeDefined();
});

test('value is Falsy', () => {
  const bool = false;
  expect(bool).toBeFalsy();
});

test.skip('value is truthy (can be removed)', () => {
  const bool = true;
  expect(bool).toBeTruthy();
});