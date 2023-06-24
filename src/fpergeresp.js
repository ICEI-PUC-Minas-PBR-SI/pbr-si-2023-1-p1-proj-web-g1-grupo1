// Seletor dos elementos do DOM
let containerperguntas = document.querySelector(".containerperguntas");
let formulario = document.querySelector("#formulario");
let formularioInput = document.querySelector("#formularioInput"); 
let formularioButton = document.querySelector("#formularioButton");
let templateperg = document.querySelector(".templateperg");

// Ouvinte de evento para o botão de envio do formulário
formularioButton.addEventListener("click", async (event) => {
  event.preventDefault();

  // Clonar o modelo da pergunta
  let templateClone = templateperg.content.cloneNode(true);
  let templateCloneh2 = templateClone.querySelector("h2");
  templateCloneh2.textContent = formularioInput.value;

  // Adicionar a pergunta ao contêiner
  containerperguntas.appendChild(templateClone);

  // Objeto da pergunta
  let pergunta = {
    perguntas: formularioInput.value,
    data: "21/06/2023",
    disponibilidade: 1,
  };

  // Adicionar a pergunta
  await adicionarPerguntas(pergunta);

  // Limpar o campo de entrada do formulário
  formularioInput.value = "";
});

// Função para listar as perguntas
async function listarPerguntas() {
  const response = await fetch("https://6492be81428c3d2035d09aa0.mockapi.io/perguntas", {
    method: "GET"
  });

  if (response.status === 200) {
    const data = await response.json();
    data.forEach(item => {
      let templateClone = templateperg.content.cloneNode(true);
      let templateCloneh2 = templateClone.querySelector("h2");
      templateCloneh2.textContent = item.perguntas;
      containerperguntas.appendChild(templateClone);
    });
  }
}

listarPerguntas();

// Função para adicionar uma pergunta
async function adicionarPerguntas(pergunta) {
  const responsePost = await fetch("https://6492be81428c3d2035d09aa0.mockapi.io/perguntas",{
    method: "POST",
    headers: {'content-type':'application/json'},
    body: JSON.stringify(pergunta)   
  });
}

// Função para listar as respostas
async function listarRespostas() {
  const response = await fetch("https://6492be81428c3d2035d09aa0.mockapi.io/respostas", {
    method: "GET"
  });

  if (response.ok) {
    const data = await response.json();
    data.forEach(item => {
      const respostaElement = document.createElement("div");
      respostaElement.classList.add("resposta");
      respostaElement.textContent = item.resposta;

      containerperguntas.appendChild(respostaElement);
    });
  } else {
    console.error("Erro ao obter as respostas da API.");
  }
}

// Seletores dos elementos do formulário de resposta
let respostaForm = document.querySelector("#respostaForm");
let respostaInput = document.querySelector("#respostaInput");
let respostaButton = document.querySelector("#respostaButton");

// Ouvinte de evento para o envio do formulário de resposta
respostaForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  let resposta = respostaInput.value;
  await adicionarResposta({ resposta });
  respostaInput.value = "";
});

// Função para adicionar uma resposta
async function adicionarResposta(resposta) {
  const response = await fetch("https://6492be81428c3d2035d09aa0.mockapi.io/respostas", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(resposta)
  });

  if (response.ok) {
    console.log("Resposta adicionada com sucesso!");
    const respostaElement = document.createElement("div");
    respostaElement.classList.add("resposta");
    respostaElement.textContent = resposta.resposta;

    containerperguntas.appendChild(respostaElement);
  } else {
    console.error("Erro ao adicionar a resposta na API.");
  }
}

listarRespostas();
