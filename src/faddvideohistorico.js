  // Função para enviar um novo vídeo para o servidor

  // Nao esta encontrando o iframe do video para disparar o evento, provavelmente porque ele esta sendo gerado pelos dados da api.
  $('#exibirVideos').on('click', 'iframe', function(e){
      console.log("entrou");
      let id = $(this).attr('id');
      id = id.replace('video_', '');

      fetch(`https://api-tiaw.vercel.app/paginadevideos?id=${id}`)
      .then(res => res.json())
      .then(video => {
        addVideo(id, video.titulo, video.link);
      });
      
  });

  function addVideo(id, title, url) {
    //pega usuario logado 
    const usuario = JSON.parse(sessionStorage.getItem('usuario_logado'));
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