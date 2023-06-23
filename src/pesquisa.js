function pesquisar_video() {
    const palavra = $('#palavra').val();
    const categoria = $('#categoria').val(); // Obtém a categoria selecionada
  
    fetch('https://api-tiaw.vercel.app/videoswpp')
      .then(res => res.json())
      .then(data => {
        let str = '';
  
        for (let i = 0; i < data.length; i++) {
          let video = data[i];
          let titulo = video.titulo.toLowerCase();
  
          if (titulo.includes(palavra.toLowerCase())) {
            str += `
              <div class="video-container mt-4 p-4">
                <h2>${video.titulo}</h2>
                <iframe width="340" height="190" src="${video.link}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            `;
          }
        }
  
        if (str === '') {
          str = '<div class="row">Nenhum resultado encontrado</div>';
        }
  
        $('#tela_pesquisa').html(str);
      })
      .catch(error => console.log(error));
  }
  