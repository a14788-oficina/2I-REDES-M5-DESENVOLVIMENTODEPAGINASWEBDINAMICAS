let participantes = 0;
const botao = document.querySelector("#atualizar");
const contador = document.querySelector("#contador");
const botaoAdicionar = document.querySelector("#adicionar");


document.querySelector("#adicionar")
  .addEventListener("click", () => {
    participantes++;
    contador.textContent = participantes;
    if (participantes === 10) {
        mensagem.textContent = "Atingiu o limite máximo de 10 participantes!"
        botaoAdicionar.disabled= true;
    }
  });


document.querySelector("#remover")
  .addEventListener("click", () => {
    if(participantes > 0)
    participantes--;
    contador.textContent = participantes;
  });