//Exericio - 01

const sum = require('./sum.js');

test('adds 4 + 5 to equal 9', () => { 
  expect(sum(4,5)).toBe(9);
 });

 test('adds 0 + 0 to equal 0', () => { 
  expect(sum(0,0)).toBe(0);
 });

 test('parameters must be numbers', () => { 
  expect(() => sum(4,'5')).toThrowError();
  expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
 });
