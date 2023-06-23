function getVideos() {
    fetch('https://api-tiaw.vercel.app/videoswpp')
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

  // Função para enviar um novo vídeo para o servidor
function addVideo(title, url) {
    const videoData = {
      title: title,
      url: url
    };
  
    fetch('https://api-tiaw.vercel.app/videoswpp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(videoData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Vídeo adicionado com sucesso:', data);
        // Atualizar o histórico de vídeos após adicionar o novo vídeo
        getVideos();
      })
      .catch(error => {
        console.error('Ocorreu um erro ao adicionar o vídeo:', error);
      });
  }
  
  // Exemplo de uso: adicionar um novo vídeo
  const newVideoTitle = 'Meu vídeo';
  const newVideoUrl = 'https://www.example.com/video';
  addVideo(newVideoTitle, newVideoUrl);
  
  // Obter a lista de vídeos do servidor
  getVideos();