  // Função para enviar um novo vídeo para o servidor
  $('#exibirVideos').on('click','.respIframe', function(){
      let id = $(this).attr('id');
      id = id.replace('video_', '');
      console.log(id);
      fetch(`https://api-tiaw.vercel.app/paginadevideos?id=${id}`)
      .then(res => res.json())
      .then(video => {
        addVideo(id, video.titulo, video.link);
      });
      
  });

  function addVideo(id, title, url) {
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    const videoData = {
      id: id,
      titulo: title,
      link: url,
      user_id: usuario.username,
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