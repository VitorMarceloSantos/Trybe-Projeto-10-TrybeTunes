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

test('(b,c,d,f,g) equals (b,c,d,f,g)', () => {
  expect(encode('b,c,d,f,g')).toBe('b,c,d,f,g');
});

test('(6,7,8,9,10) equals (6,7,8,9,10)', () => {
  expect('(6,7,8,9,10)').toBe('(6,7,8,9,10)');
});