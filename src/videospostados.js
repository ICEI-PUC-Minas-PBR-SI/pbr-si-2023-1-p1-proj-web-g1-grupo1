function getVideos() {
    fetch('https://api-tiaw.vercel.app/geral')
      .then(response => response.json())
      .then(data => {
        const videosContainer = document.getElementById('textopost2');
        
        // Limpar o container de vídeos
        videosContainer.innerHTML = '';

        // Iterar sobre os vídeos e criar elementos HTML para exibi-los
        data.forEach(video => {
          const videoElement = document.createElement('iframe');
          videoElement.src = video.url;
          videoElement.width = '560';
          videoElement.height = '315';

          videosContainer.appendChild(videoElement);
        });
      })
      .catch(error => {
        console.log('Ocorreu um erro ao obter os vídeos:', error);
      });
  }

  // Chamar a função para obter os vídeos quando a página for carregada
  getVideos();
