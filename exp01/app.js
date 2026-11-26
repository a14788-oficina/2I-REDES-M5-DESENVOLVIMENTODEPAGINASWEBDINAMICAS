const evento = {
  nome: "Evento Tecnplógico",
  cidade: "Lisboa, Portugal",
  mensagem: "Consulta as novidades do evento.",
  nomeAutor: "David Beckham",
  cargo: "Lenda do desporto",
  tema: "Esportes e condicionamento físico"
};


const botao = document.querySelector("#atualizar");


botao.addEventListener("click", () => {
  document.querySelector("#titulo").textContent =
    evento.nomeAutor;


  document.querySelector("#local").textContent =
    evento.cargo;


  document.querySelector("#mensagem").textContent =
    evento.tema;
})