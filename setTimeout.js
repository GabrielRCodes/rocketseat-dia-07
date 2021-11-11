/* 

Próximas aulas 

Timers

Uma maneira de trabalharmos com o tempo dentro do NodeJS

O que vamos aprender

[] setTimeout
[] clearTimeout
[] setInterval
[] clearInterval

Iremos praticar um pouco mais de

[] Assincronismo
[] Callbacks

*/

// setTimeout rodar uma função depois de X milissegundos
const timeOut = 3000;
const finished = () => {
  console.log("done!");
};

setTimeout(finished, timeOut);
console.log("Mostrar");
