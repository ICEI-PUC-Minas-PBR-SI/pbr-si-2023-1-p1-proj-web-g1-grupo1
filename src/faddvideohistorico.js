  // Função para enviar um novo vídeo para o servidor
  function addVideo(id, title, url) {
    const usuario = JSON.parse(localStorage.getItem('username'));
    const videoData = {
      id: id,
      titulo: title,
      link: url,
      user_id: usuario.id,
    };
    
    console.log(videoData);
    
    fetch('https://api-tiaw.vercel.app/hitoricovideo', {
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