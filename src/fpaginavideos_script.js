function exibirVideosWpp() {
    fetch("https://api-tiaw.vercel.app/videoswpp")
        .then(res => res.json())
        .then(data => {
            let str = ''
            for (let i = 0; i < data.length; i++) {
                let videoswpp = data[i]
                str += `<div id="videosMaiores">
                <iframe src="${videoswpp.link}" class="respIframe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p class="tituloVideosPequenos">${videoswpp.titulo}</p>
            </div>`
            }
            document.getElementById('exibirVideos').innerHTML = str
        })
}

function toggleCommentBox() {
    var commentBox = document.getElementById("commentBox");
    commentBox.style.display = commentBox.style.display === "none" ? "block" : "none";
  
    if (commentBox.style.display === "block") {
      commentBox.style.animationName = "slideIn";
      commentBox.style.right = "0";
    } else {
      commentBox.style.animationName = "slideOut";
      commentBox.style.right = "-300px";
  
      // Reinicia a animação de slideOut após o tempo de duração da animação
      setTimeout(function () {
        commentBox.style.animationName = "";
      }, 500);
    }
  }
  
  function submitComment() {
    var commentInput = document.getElementById("commentInput");
    var commentSection = document.getElementById("commentSection");
  
    var commentText = commentInput.value;
    commentInput.value = "";
  
    var commentParagraph = document.createElement("p");
    commentParagraph.innerHTML = commentText;
  
    commentSection.appendChild(commentParagraph);
  }

  function exibirVideosWpp() {
    fetch("https://api-tiaw.vercel.app/videoswpp")
        .then(res => res.json())
        .then(data => {
            let str = '';
            for (let i = 0; i < data.length; i++) {
                let videoswpp = data[i];
                str += `<div id="videosMaiores">
                    <iframe src="${videoswpp.link}" class="respIframe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p class="tituloVideosPequenos" onclick="abrirVideo('${videoswpp.link}')">${videoswpp.titulo}</p>
                </div>`;
            }
            document.getElementById('exibirVideos').innerHTML = str;
        });
}

function abrirVideo(link) {
    // Redirecionar para a página do vídeo dentro da aplicação
    // Você pode usar a função window.location.href para isso
    window.location.href = link;
}
