//Exercicio - 03
const myFizzBuzz = require('./myFizzBuzz');

test('(15) é divisivel por (3, 5)', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

test('(6) é divisivel por (6)', () => {
  expect(myFizzBuzz(6)).toBe('fizz');
});
