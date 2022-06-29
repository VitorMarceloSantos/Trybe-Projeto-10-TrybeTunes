// Spread Operator: é uma sintaxe de propagação. Em outras palavras, permite a expansão de um objeto que seja iterável.  -> tranforma de um elemento para muitos elementos

const num1 = [1, 2, 3, 4];
const num2 = [5, 6, 7, 8];

const spread = [...num1, ...num2]; // O operador spread faz com que os elementos iteráveis se unem a variável que está sendo atribuida, tornando apenas uma variável.
console.log(spread);

// O spread também pode ser usado nos teste(jest), ao invés de especificar um array da seguinte da forma: num1[0], num1[1], num1[2], num1[3], pode se usar o ...num1 , que vai surtir o mesmo resultado(o num1 está sendo expandindo).

// O Rest Operator é o contrário do spread, apesar de utilizar os (...),  partindo de alguns números e virando um array. Exemplo: (1, 2, 3, 4, 5), -> (...operands) é o mesmo que ([1, 2, 3, 4, 5]) , operands vai se transformar em um array com elementos que estão sendo passados para ele.
// -> transforma de muitos elementos para um elemento

const sumAll = (...operands) => { //junta os números passados em apenas um array
  console.log(operands);
  return operands.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1,2,3)); // passando com parâmetro, 3 numbers, e será transformado em um array de numbers no operands.

//Utilizando o spread e o rest.

const formatDate = (year, month, day, ...rest) => { // utilizando o rest
  console.log(rest);
  return `${day}/${month}/${year} ${rest.join(':')} `;
}


const dateInfo = ['1981', '7', '31', '22', '47', '12'];


console.log(formatDate(...dateInfo)) // utilizando o spread

// Destructuring - trabalhar com partes de um objeto/arrays. (Em vez de trabalhar com o todo  o objeto/array, pode ser trabalhar apenas com determinados elementos deste objeto/array).  Ao realizar a destruturação os elementos que sofreram a destruturação são transformados em variáveis.

const richestDuckInTheWorld = {
  name: 'Scrooge McDuck',
  birthplace: 'Glasgow, Scotland',
  city: 'Duckburg',
  jobs: ['Shoe shiner', 'Sailor', 'Cowboy', 'Miner', 'Banker', 'Entrepreneur']
};

const {name,birthplace} = richestDuckInTheWorld; // destructuring - name,birthplace, jobs são variáveis
console.log(name);
console.log(birthplace);
//module.exporte = {name, birthplace} -> pode exportar somente as variáveis que foram destruturadas

// Pode ocorrer também a destruturação de arrays. 
const {jobs} = richestDuckInTheWorld;
console.log(jobs);

//Pode ocorrer também o spread da destruturação de um array.
const [first, second, third] = jobs; // respeita a ordem do array, atribuindo os elementos[0,1,2] as seguintes variaveis
console.log(first);
console.log(second);
console.log(third);
//Quando quiser pular algum elemento para acessar outro no array pode utilizar virgula, cada virgula é um elemento.
const [,,,quarto,,sexto] = jobs;
console.log(quarto);
console.log(sexto);




const lion = {
  name: 'Panthera leo',
  commonName: 'Lion',
  weightRange: {
    min: 186.55,
    max: 225,
    measurementUnit: 'kg'
  }
};

const blueWhale = {
  name: 'Balaenoptera musculus',
  commonName: 'Blue whale',
  weightRange: {
    min: 45,
    max: 173,
    measurementUnit: 't'
  }
};

const polarBear = {
  name: 'Ursus maritimus',
  commonName: 'Polar Bear',
  weightRange: {
    min: 350,
    max: 700
  }
};
// Destruturação
const animalDescription = (animal) => { // animal é o objeto passado por parametro
  const {name,commonName,weightRange} = animal;
  const {min, max, measurementUnit = 'kg' } = weightRange // primeiro destrutura weightRange, para depois destruturar min, max, measurementUnit
  return `${commonName} (${name}) weighs around ${min}-${max} ${measurementUnit}`;
}

console.log(animalDescription(polarBear));
//measurentUnit quando não tiver(polarBear) parametro pode utilizar um valor padrão('KG'), caso não seja passado nenhum parâmetro(undefined), será utilizado o valor 'Kg'

//Abreviação
// Quando o nome da chave é o nome do value são iguais, pode deixar apenas um.
// const createSuperhero = (name, superheroName, nickname, powers) => {
//   return {
//     name: name,
//     superheroName: superheroName,
//     nickname: nickname,
//     powers: powers
//   };
// };

const createSuperhero = (name, superheroName, nickname, powers) => {
  return {
    name,
    superheroName,
    nickname,
    powers
  };
};