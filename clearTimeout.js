/*

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

// clearTimeout cancelar um timeOut
const timeOut = 3000;
const finished = () => {
  console.log("done!");
};

let timer = setTimeout(finished, timeOut);
clearTimeout(timer);
