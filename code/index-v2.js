//Pega dados do usuario
const prompt = require("prompt-sync")();

let opcao;

while (true) {
  //Pergunta se o usuário desja descobrir o nível do herói
  opcao = parseInt(
    prompt(
      "Deseja descubri o nível do Herói - Digite 1 para SIM ou 2 para NÃO "
    ),
    10
  );

  //Verifica se a opção é válida
  while (opcao !== 1 && opcao !== 2) {
    console.log("Opção inválida! Tente de novo!");
    opcao = parseInt(
      prompt(
        "Deseja descubri o nível do Herói - Digite 1 para SIM ou 2 para NÃO "
      ),
      10
    );
  }

  if (opcao === 1) {
    // Solicita o nome e a quantidade de experiência (XP) do herói
    let nome = prompt("Digite o Nome do Herói: ");
    let xp = parseInt(
      prompt("Digite a Quantidade de Experiência do Herói: "),
      10
    );

    //nível do herói
    let nivel;

    //Classificação do nível conforme a quantidade de XP
    switch (true) {
      case xp <= 1000:
        nivel = "Ferro";
        break;
      case xp >= 1001 && xp <= 2000:
        nivel = "Bronze";
        break;
      case xp >= 2001 && xp <= 5000:
        nivel = "Prata";
        break;
      case xp >= 5001 && xp <= 7000:
        nivel = "Ouro";
        break;
      case xp >= 7001 && xp <= 8000:
        nivel = "Platina";
        break;
      case xp >= 8001 && xp <= 9000:
        nivel = "Ascendente";
        break;
      case xp >= 9001 && xp <= 10000:
        nivel = "Imortal";
        break;
      default:
        nivel = "Radiante"; //Para XP igual ou acima de 10001
        break;
    }

    console.log(`\nO Herói de nome ${nome} está no nível de ${nivel}\n`);
  } else {
    console.log("Programa encerrado.");
    break;
  }
}
