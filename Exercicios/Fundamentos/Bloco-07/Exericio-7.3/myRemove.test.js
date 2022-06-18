//Exericio - 02
const myRemove = require('./myRemove.js');

test('([1, 2, 3, 4], 3) = [1, 2, 4]', () => { 
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

test('([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});