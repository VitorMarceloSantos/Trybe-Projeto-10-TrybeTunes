//Exericio - 05
function techList(array, nome) {
  const arrayOrdenado = array.sort();
  const arrayObjeto = [];

  if(array.length === 0) {
    return 'Vazio!';
  }
  
  for(let i = 0; i < arrayOrdenado.length; i += 1) {
    arrayObjeto.push({tech: arrayOrdenado[i], name: nome});
  }
  return arrayObjeto
}

module.exports = techList;