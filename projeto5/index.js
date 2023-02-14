const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cssPropertiesList = [];

function askForCSSProperties() {
  rl.question('Insira uma lista de propriedades CSS separadas por vírgulas ou escreva "sair" para encerrar: ', (answer) => {
    if (answer === 'sair') {
      console.log('Encerrando programa.');
      console.log('Propriedades CSS inseridas:');
      cssPropertiesList.sort();
      console.log(cssPropertiesList);
      rl.close();
    } else {
      let cssProperties = answer.split(',');
      cssProperties.forEach(property => cssPropertiesList.push(property));
      askForCSSProperties();
    }
  });
}

askForCSSProperties();