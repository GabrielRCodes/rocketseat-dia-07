// console.log(process);
// console.log(process.argv);

// console.log("seu nome é", process.argv[2] + " " + process.argv[3]);

const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Seu nome é ${firstName} ${lastName}`);

// COMANDO DO TERMINAL: node process --name "Gabriel Rodrigues" --greeting "Tudo bem com você?"
