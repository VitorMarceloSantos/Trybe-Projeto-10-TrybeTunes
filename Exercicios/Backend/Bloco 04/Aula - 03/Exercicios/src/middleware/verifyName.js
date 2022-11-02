// const readFile = require('../utils/readFile');

const verifyName = async (req, res, next) => {
  const array = [ 'price', 'description', 'name' ];
 if(array.every((element) => element in  req.body)) {
  console.log('positivo')
 }

}

module.exports = verifyName;