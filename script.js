
// const cor = prompt("Qual é a sua cor favorita?");


// //concatenação
// let mensagem1 = "A cor favorita de " + nome + " é " + cor
// let mensagem2 = `A cor favorita de ${nome} é ${cor}`

// console.log(mensagem1);
// console.log(mensagem2);

// const citacao = prompt("Qual é a sua citação favorita?");

// // mensagem1 = `${mensagem1}, e a citação favorita é "${citacao}"`
// // console.log(mensagem1);

// // mensagem2 = mensagem2 + " e a sua citação favorita é \" " + citacao + " \" "
// // console.log(mensagem2);

// // console.log("Nome: " + nome + "\n Cor: " + cor + "\n Citação: " + citacao);

// mensagem2 = `Nome: ${nome}
// Cor favorita: ${cor}
// Citação: ${citacao}`
// console.log(mensagem2);

// console.log(`O nome ${nome.toUpperCase()} possui ${nome.length} caracteres`);
// console.log(`O nome possui a letra A: ${nome.includes("a")}`);

const nomeDoUsuario = prompt("Qual é seu nome?");
const emailDoUsuario = prompt("Qual é seu email?")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeDoUsuario}! Quantidade de caracteres: ${nomeDoUsuario.length}`);

nomeAlterado = nomeDoUsuario.replaceAll("r","l");
console.log(nomeAlterado);
console.log(emailDoUsuario.includes("@"));
