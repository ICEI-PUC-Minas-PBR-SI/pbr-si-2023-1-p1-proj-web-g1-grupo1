$(document).ready(function() {
    // Botão para abrir o modal
    $('#addVideoButton').click(function() {
      $('#videoModal').modal('show');
    });
  
    // Evento de fechamento do modal
    $('#videoModal').on('hidden.bs.modal', function() {
      $('#videoForm')[0].reset(); // Limpa os campos do formulário
      $('#messageContainer').empty(); // Remove qualquer mensagem de erro ou sucesso
    });
  
    // Formulário de envio
    $('#videoForm').submit(function(event) {
      event.preventDefault(); // Evita que o formulário seja enviado diretamente
  
      // Obtém os valores dos campos do formulário
      var videoId = parseInt($('#videoId').val());
      var videoLink = $('#videoLink').val();
      var videoTitle = $('#videoTitle').val();
  
      // Verifica se o ID é um número válido
      if (isNaN(videoId)) {
        $('#messageContainer').html('<div class="alert alert-danger" role="alert">O ID do vídeo deve ser um número válido.</div>');
        return;
      }
  
      // Cria um objeto com os dados do vídeo
      var videoData = {
        id: videoId,
        link: videoLink,
        title: videoTitle
      };
  
      // Desabilita o botão de envio
      $('#videoForm button[type="submit"]').prop('disabled', true);
  
      // Verifica se o ID já existe na API
      fetch('https://api-tiaw.vercel.app/videoswpp/' + videoId, {
          method: 'GET',
      })
      .then(function(response) {
          if (response.ok) {
              // ID já existe na API
              $('#messageContainer').html('<div class="alert alert-danger" role="alert">O ID do vídeo já está em uso.</div>');
              throw new Error('ID já existente');
          }
          return response.json();
      })
      .then(function() {
          // Faz uma requisição para a API externa
          return fetch('https://api-tiaw.vercel.app/videoswpp', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(videoData)
          });
      })
      .then(function(response) {
          if (response.ok || response.status === 500) {
              $('#messageContainer').html('<div class="alert alert-success" role="alert">Vídeo adicionado com sucesso!</div>');
              // Faça outras ações, se necessário
          } else {
              $('#messageContainer').html('<div class="alert alert-danger" role="alert">Ocorreu um erro ao adicionar o vídeo. Status: ' + response.status + '</div>');
              // Lide com o erro de acordo com sua necessidade
          }
      })
      .catch(function(error) {
          if (error.message !== 'ID já existente') {
              $('#messageContainer').html('<div class="alert alert-danger" role="alert">Ocorreu um erro: ' + error + '</div>');
              // Lide com o erro de acordo com sua necessidade
          }
      })
      .finally(function() {
          // Habilita o botão de envio
          $('#videoForm button[type="submit"]').prop('disabled', false);
      });
    });
  });
  