/* 

Event module 

É um mecanismo para

[] Disparar eventos
[] Ouvir eventos
[] Fazer alguma ação quando ouvir o evento
[] É a base para muitos outros módulos como: http, stream, file system, etc...

O que vamos aprender

[] Utilizar os eventos
[] Disparar eventos
[] Ouvir eventos
[] Executar ações para determinados eventos
[] Entender como ele é base para os outros módulos

*/

const { EventEmitter } = require("events");

const ev = new EventEmitter();

// console.log(ev);
ev.on("saySomething", (message) => {
  console.log("Eu ouvi você!", message);
}); // Ouvir evento

ev.emit("saySomething", "Gabriel"); // Emitir evento
ev.emit("saySomething", "Mayk"); // Emitir evento
ev.emit("saySomething", "Camila"); // Emitir evento
