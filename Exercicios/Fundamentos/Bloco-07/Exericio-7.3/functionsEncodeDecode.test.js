// Exercicio 4

const {encode, decode} = require('./functionsEncodeDecode');

test('is function', () => {
 expect((typeof encode)).toBe('function');
});

test('is function', () => {
 expect(typeof decode).toBe('function');
});

test('(a, e, i, o, u) equals (1, 2, 3, 4, 5)', () => {
  expect(encode('a,e,i,o,u')).toBe('1,2,3,4,5');
});

test('[1,2,3,4,5] equals (a, e, i, o, u)', () => {
 expect(decode('1,2,3,4,5')).toBe('a,e,i,o,u');
});