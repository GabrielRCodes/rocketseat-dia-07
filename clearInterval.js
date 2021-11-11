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

const timeOut = 2000;
const checking = () => {
  console.log("checking!");
};

let interval = setInterval(checking, timeOut);
clearInterval(interval);

setTimeout(() => clearInterval(interval), 3000);
