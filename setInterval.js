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

// setInterval irá rodar uma função N vezes
// depois de X milissegundos
const timeOut = 1000;
const checking = () => {
  console.log("checking!");
};

setInterval(checking, timeOut);
