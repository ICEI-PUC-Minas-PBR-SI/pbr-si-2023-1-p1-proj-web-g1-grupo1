
let containerperguntas = document.querySelector(".lista-de-perguntas");
      let formulario = document.querySelector("#formulario");
      let formularioInput = document.querySelector("#formularioInput"); 
      let formularioButton = document.querySelector("#formularioButton");
      let templateperg = document.querySelector("#templateperg");

      console.log(containerperguntas);
      console.log(formulario);
      console.log(formularioInput);
      console.log(formularioButton);
      console.log(templateperg);

      formularioButton.addEventListener("click", (event) => {
        event.preventDefault();
        let templateClone = templateperg.content.cloneNode(true);
        let templateCloneP = templateClone.querySelector("p");
        templateCloneP.textContent = formularioInput.value;
        containerperguntas.appendChild(templateClone);

        let pergunta = {
          perguntas: `${formularioInput.value}`,
          data: `${new Date().toLocaleDateString("pt-BR", { year: 'numeric', month: '2-digit', day: '2-digit' }) }`,
          disponibilidade: 1,
        }
        adicionarPerguntas(pergunta);
        formularioInput.value = "";
      })

      // LISTAR PERGUNTAS
      async function listarPerguntas(){
        let templateperg = document.querySelector("#templateperg");
        const response = await fetch("https://6492be81428c3d2035d09aa0.mockapi.io/perguntas", {
          method: "GET"
        });
        if(response.status == 200){
          const data = await response.json();
          data.forEach(item => {
            // Template Clone
            let templateClone = templateperg.content.cloneNode(true);
            // Template Pergunta
            let templateCloneP = templateClone.querySelector("p");
            // Template Excluir Pergunta
            let templateCloneExcluirPergunta = templateClone.querySelector(".excluirPergunta");
            
           
            // Insere Pergunta
            templateCloneP.textContent = item.perguntas;
            // Insere ID pergunta
            templateCloneExcluirPergunta.setAttribute("Id", `${item.id}`);

            containerperguntas.appendChild(templateClone);
          });
        }
      }
      listarPerguntas();

      // ADICIONAR PERGUNTAS
      async function adicionarPerguntas(pergunta){
        const responsePost = await fetch("https://6492be81428c3d2035d09aa0.mockapi.io/perguntas",{
          method: "POST",
          headers: {'content-type':'application/json'},
          body: JSON.stringify(pergunta)   
        });
      }


      // LISTAR RESPOSTAS
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

      let respostaForm = document.querySelector("#respostaForm");
      let respostaInput = document.querySelector("#respostaInput");
      let respostaButton = document.querySelector("#respostaButton");

      respostaForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let resposta = respostaInput.value;
        adicionarResposta({ resposta });
        respostaInput.value = "";
      });


      // ADICIONAR RESPOSTAS
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
