// function userInfo() {
//     let userEmail = 'maria@email.com';
  
//     // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
//     console.log(userEmail);
//   }
//   userInfo();

//==========================================================================

if (true) {
  // inicio do escopo do if
  var userAge = '20';
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20 - no caso ele está vazando a inf por conta da linha 13 estar com var e não let ou const 

//==========================================================================

//  https://assets.app.betrybe.com/fundamentals/javascript-es6/images/escopos-0945c242e80b8eb512adb7c89a37c72d.gif

//==========================================================================

var userName = 'Isabella';
var userName = 'Lucas';
console.log(userName); // Resultado: Lucas

//==========================================================================

const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition

//==========================================================================

const userInfo = {
  name: 'Cláudio',
  id: '5489-2',
  email: 'claudio@email.com',
};

userInfo.name = 'João';
console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

//==========================================================================

const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro

//==========================================================================

age = 20;

var age;

console.log(age); // 20


//==========================================================================

var age;

age = 20;

console.log(age); // 20


//==========================================================================

var age;

console.log(age); // undefined

age = 20;

console.log(age); // 20

//==========================================================================