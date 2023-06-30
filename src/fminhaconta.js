function getVideos() {
    fetch('https://api-tiaw.vercel.app/geral')
      .then(response => response.json())
      .then(data => {
        // Processar a resposta do servidor e exibir os vídeos no histórico
        const videos = data.videos;
        videos.forEach(video => {
          // Adicionar o vídeo ao histórico
          const videoElement = document.createElement('div');
          videoElement.textContent = video.title;
          document.getElementById('textopost2').appendChild(videoElement);
        });
      }) 
      .catch(error => {
        console.error('Ocorreu um erro ao obter os vídeos:', error);
      });
  }


  
  getVideos();
