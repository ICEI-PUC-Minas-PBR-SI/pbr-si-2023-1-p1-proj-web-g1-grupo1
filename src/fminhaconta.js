function getVideos() {
  const usuario = JSON.parse(sessionStorage.getItem('usuario_logado'));
    fetch(`https://api-tiaw.vercel.app/hitoricovideo`)
      .then(response => response.json())
      .then(data => {
        // Processar a resposta do servidor e exibir os vídeos no histórico
        // filtra  os videos vistos apenas pelo usuario atual
        const videos = data.filter(video => video.user_id == usuario.username);
        videos.forEach(video => {
          // Adicionar o vídeo ao histórico
          const videoElement = document.createElement('div');
          videoElement.textContent = video.title;
          document.getElementById('container-1"').appendChild(videoElement);
        });
      }) 
      .catch(error => {
        console.error('Ocorreu um erro ao obter os vídeos:', error);
      });
  }
  
  getVideos();