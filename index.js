/* 

Best me App

Encontre sua melhor versão!

Use o App ao final de cada dia para refletir sobre sua jornada.

O que vamos aprender?

A se comunicar com o processo enquanto ele estiver rodando.

[] process.stdout
[] process.stdin
[] process.on - Linha ligada até o exit - Fica ouvindo até o exit
[] process.exit - Fechamento do programa

* Assincronismo

*/

// \n = new line

// process.stdout.write("Alguma coisa \n\n\n");

const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?",
];

const ask = (index = 0) => {
  process.stdout.write("\n\n" + questions[index] + " > ");
};

ask();
// ask(2);

// ENTRADA DE DADOS
// process.on ("ficar ouvindo")
// process.stdout
// process.stdin

const answers = [];

process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    console.log(answers);
    process.exit();
  }
});

process.on("exit", () => {
  console.log(`
  Bacana Gabriel!

  O que você aprendeu hoje foi:
  ${answers[0]}

  O que te aborreceu e você poderia mehorar foi:
  ${answers[1]}

  O que te deixou feliz hoje:
  ${answers[2]}

  Você ajudou ${answers[3]} pessoas hoje!

  Volte amanhã para novas reflexões!
  `);
});

// process.exit() = Fecha o processo
// CTRL + C no terminal fecha o processo
