function exibirVideosPrincipais() {
    const videosContainer = document.getElementById('videos');
  
    fetch('https://api-tiaw.vercel.app/videoswpp')
      .then(res => res.json())
      .then(data => {
        let str = '';
  
        for (let i = 0; i < Math.min(3, data.length); i++) {
          const video = data[i];
  
          str += `
  <div class="col-md-4">
   
    <iframe width="340" height="190" src="${video.link}" frameborder="0" allowfullscreen></iframe>
    <h5>${video.titulo}</h5>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
  </div>
`;
        }
  
        videosContainer.innerHTML = str;
      })
      .catch(error => console.log(error));
  }
  
  // Chama a função para exibir os vídeos principais
  exibirVideosPrincipais();
  