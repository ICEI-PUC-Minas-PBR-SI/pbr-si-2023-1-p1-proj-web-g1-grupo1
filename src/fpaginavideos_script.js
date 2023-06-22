function exibirVideosWpp() {
    fetch("https://api-tiaw.vercel.app/videoswpp")
        .then(res => res.json())
        .then(data => {
            let str = ''
            for (let i = 0; i < data.length; i++) {
                let videoswpp = data[i]
                str += `<div class="videosPequenos">
                <iframe width="560" height="315" src="${videoswpp.link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p class="tituloVideosPequenos">${videoswpp.titulo}</p>
            </div>
            <button class="button" onclick="toggleCommentBox()">Comentar</button>

            <div id="commentBox" class="comment-box">
              <span class="close-button" onclick="toggleCommentBox()">&#10005;</span>
              <input type="text" id="commentInput" class="comment-input" placeholder="Digite seu comentário">
              <button class="comment-submit" onclick="submitComment()">Enviar</button>
          
              <div id="commentSection"></div>
            </div>`
            }
            document.getElementById('exibirVideos').innerHTML = str
        })
}

function toggleCommentBox() {
    var commentBox = document.getElementById("commentBox");
    var commentInput = document.getElementById("commentInput");
  
    if (commentBox.style.display === "none") {
      commentBox.style.display = "block";
      commentBox.style.animationName = "slideIn";
      commentInput.value = ""; // Limpa o campo de comentário ao abrir a aba
    } else {
      commentBox.style.animationName = "slideOut";
      setTimeout(function() {
        commentBox.style.display = "none";
      }, 500);
    }
  }
  
  function submitComment() {
    var commentInput = document.getElementById("commentInput");
    var commentSection = document.getElementById("commentSection");
    var comment = commentInput.value;
  
    if (comment !== "") {
      var newComment = document.createElement("p");
      newComment.innerHTML = comment;
      commentSection.appendChild(newComment);
      commentInput.value = ""; // Limpa o campo de comentário após enviar
    }
  }