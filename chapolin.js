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

const { inherits } = require("util");
const { EventEmitter } = require("events");

function Character(name) {
  this.name = name;
}

inherits(Character, EventEmitter);

const chapolin = new Character("Chapolin");
chapolin.on("help", () => console.log(`Eu! o ${chapolin.name} colorado!`));

console.log(`Oh! E agora, quem poderá me defender?`);
chapolin.emit("help");
