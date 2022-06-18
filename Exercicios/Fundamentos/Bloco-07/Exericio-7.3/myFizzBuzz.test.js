//Exercicio - 03
const myFizzBuzz = require('./myFizzBuzz');

test('(15) é divisivel por (3, 5)', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

test('(6) é divisivel por (3)', () => {
  expect(myFizzBuzz(6)).toBe('fizz');
});

test('(10 é divisivel por (5))', () => {
  expect(myFizzBuzz(10)).toBe('buzz');
});