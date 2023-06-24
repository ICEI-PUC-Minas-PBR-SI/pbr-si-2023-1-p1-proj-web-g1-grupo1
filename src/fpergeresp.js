let containerperguntas = document.querySelector(".containerperguntas");
      let formulario = document.querySelector("#formulario");
      let formularioInput = document.querySelector("#formularioInput"); 
      let formularioButton = document.querySelector("#formularioButton");
      let templateperg = document.querySelector(".templateperg");

      formularioButton.addEventListener("click", (event) => {
        event.preventDefault();
        let templateClone = templateperg.content.cloneNode(true);
        let templateCloneh2 = templateClone.querySelector("h2");
        templateCloneh2.textContent = formularioInput.value;
        containerperguntas.appendChild(templateClone);

        let pergunta = {
          perguntas: `${formularioInput.value}`,
          data: "21/06/2023",
          disponibilidade: 1,
        }
        adicionarPerguntas(pergunta);
        formularioInput.value = "";
      })

      async function listarPerguntas(){
        let templateperg = document.querySelector(".templateperg");
        const response = await fetch("https://6492be81428c3d2035d09aa0.mockapi.io/perguntas", {
          method: "GET"
        });
        if(response.status == 200){
          const data = await response.json();
          data.forEach(item => {
            let templateClone = templateperg.content.cloneNode(true);
            let templateCloneh2 = templateClone.querySelector("h2");
            templateCloneh2.textContent = item.perguntas;
            containerperguntas.appendChild(templateCloneh2);
          });
        }
      }
      listarPerguntas();

      async function adicionarPerguntas(pergunta){
        const responsePost = await fetch("https://6492be81428c3d2035d09aa0.mockapi.io/perguntas",{
          method: "POST",
          headers: {'content-type':'application/json'},
          body: JSON.stringify(pergunta)   
        });
      }

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
