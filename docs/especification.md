# Especificações do Projeto
 Alcance, uma aplicação que tem como objetivo auxiliar aos idosos a interagir no mundo digital.  O projeto visa ensinar a como executar simples tarefas do cotidiano, seja no celular ou computador, contribuindo assim para inclusão digital entre as pessoas da terceira idade. Vídeo aulas curtas e explicativas serão postadas na plataforma, por pessoas interessadas a ensinar os idosos. Também será integrado com vídeos em plataformas de streaming já existentes, como o Youtube, para assim obter um vasto conteúdo.
 
 Em toda a aplicação será utilizado os recurso de: Front-end HTML + CSS, Bootstrap, e Back-end javascript, CRUD, JSONServer, LocalStorage.
## Personas
 
1° - Rodrigo Alves tem 67 anos, casado, é um motorista recém-aposentado e atualmente trabalha com um estabelecimento próprio. Pretende expandir seu negocio com a ajuda da tecnologia, pois adora cozinhar e era seu sonho ter seu próprio bar. Está procurando por ajuda para aprender melhor sobre os aplicativos, já que possui dificuldades em aprender a usar a tecnologia ao seu favor, nem sempre pode contar com a ajuda dos filhos e dos netos para fazer alguma atividade que envolva o uso de aplicativos. Seu hobby é tocar violão. 

2° - Maria Silva tem 60 anos, casada, é uma professora aposentada e autônoma. Ajuda as crianças e adolescentes que possuem dificuldades em aprender sobre a história do Brasil, mostrando sempre boa vontade e transmitindo com clareza o seu conhecimento, pois é uma felicidade ajudar as pessoas. Está buscando uma maneira de aprender mais sobre a tecnologia, para poder criar vídeos sobre os conhecimentos no qual domina e montar um cronograma de estudos em seu canal para auxiliar os estudantes. Seu hobby é passar o tempo cuidando dos seus pets. 

3° - Lilia Gomes tem 59 anos, solteira, é uma enfermeira e trabalha em sua área. Pensa em aprimorar seus conhecimentos sobre os aplicativos, pois em seu trabalho estão implementando várias funções tecnologicas e também, além de simpatizar com o mundo tecnologico. Adora dialogar com seus pacientes, onde muitas das vezes não está por dentro das coisas quando falam sobre tecnologia, nisso ela está procurando uma maneira de se atualizar tanto no ambiente de trabalho, quanto em momentos de lazer. Seu hobby é tocar piano e dançar.  

4° - Paulo Mendes tem 36 anos, solteiro, é um design de games e é autônomo. Pretende montar uma startup com foco em desenvolvimento de jogos, pois depois de ter administrado um projeto de games, viu que era mesmo aquilo que queria trabalhar no dia a dia. Gosta de administrar um blog que fez em conjunto com seu amigo, pois adora transmitir o conteúdo do mundo dos jogos. Seu objetivo inicial é aperfeiçoar seu portfólio e entrar para a industria de jogos e só depois montar a sua startup. Seu hobby é correr. 

5° - Christian Souza tem 26 anos, solteiro, é um programador e trabalha em sua área. Seu sonho futuramente é ser professor em uma universidade, pois em seu tempo livre, gosta de ajudar as pessoas a entender melhor sobre o mundo da tecnologia, sendo passando informações e dicas em suas redes sociais, quanto postando tutoriais no YouTube sobre diversos assuntos relacionados aos aplicativos. Em seu tempo livre, seu hobby é jogar. 

6° - Maria Aparecida tem 43 anos, solteira, é uma advogada e trabalha em sua área. Pretende futuramente abrir seu próprio escritório, mas para isso precisa se atualizar sobre o os avanços técnologicos, como o mercado de trabalho em sua área está bastante saturado, a inovação é um ponto forte para novas destacar no mercado de trabalho, por isso que está em busca de aprender mais sobre o uso de redes sociais, aplicativos e etc. Seu hobby é ler. 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário |Precisa de auxílio para aprender a usar aplicativos com a ajuda da tecnologia.|Para expandir seu negocio, pois adora culinária e pretende ter seu próprio bar.  |
|Usuário |Auxílio com a tecnologia para criar vídeos  |Para ajudar seus alunos transmitindo conhecimento e tendo um cronograma de estudos.|
|Usuário |Aprimorar seus conhecimentos em aplicativos.|Para usar os aperfeiçoamentos que obtiver a seu favor no trabalho, além de ficar por dentro do mundo tecnológico. |
|Administrador |Aperfeiçoamento em seu portfólio.  | Administrar negócios e abrir uma startup    |
|Usuário| Quer postar tutorias de diversos assuntos relacionados a aplicativos   |Auxiliar pessoas através de vídeos.|
|Usuário|Precisa de atualizações sobre os avanços tecnológicos  | Para se destacar no mercado de trabalho e abrir seu próprio escritório  |

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| O sistema irá separar o conteúdo por categorias e sobre determinados assuntos | BAIXA | KARINE |
|RF-002| O sistema permite o usuário avaliar o conteúdo | BAIXA | BRENDA |
|RF-003| O sistema permite o usuário adicionar comentários sobre os vídeos  | BAIXA | GIOVANE |
|RF-004| O sistema permite ordenar os vídeos de acordo com a avaliação do usuário| BAIXA | LUNA |
|RF-005| O sistema permite o usuário pesquisar os conteúdos desejados | MÉDIA | BRUNA |
|RF-006| O sistema deve validar o conteúdo postado antes de ser publicado | MÉDIA | ESTER |
|RF-007| O sistema permite postar conteúdos em vídeo | ALTA | LUANNA |
|RF-008| O sistema permite a alteração no cadastro do usuário | ALTA | GIOVANE |
|RF-009| O sistema deve permitir o cadastro de usuários com login e senha para acesso | ALTA | KARINE |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RNF-001| O sistema terá uma aplicação responsiva | ALTA | LUNA |
|RNF-002| O sistema deve proteger os dados e garantir segurança das informações                                     | ALTA | GIOVANE |
|RNF-003| O sistema deve ser capaz de ser executado em diferentes plataformas e ambientes                           | ALTA | BRENDA |
|RNF-004| O sistema deve ser capaz de lidar com um aumento na demanda sem degradação no desempenho | ALTA | LUANNA |
|RNF-005| O sistema permite o usuário ter acesso com rede de internet como: wifi e dados movéis                        | MÉDIA | KARINE |
|RNF-006| O sistema irá rodar nos principais browsers: Microsoft Edge, Firefox, Google Chrome, Opera, Safari | MÉDIA | LUNA |
|RNF-007| O sistema deve ser confiável e atender aos requisitos do usuário | MÉDIA | ESTER |
|RNF-008| O sistema deve manter a atualização em dia e com novas versões | MÉDIA | KARINE |
|RNF-009| O sistema será de fácil compreensão e manuseio                                | BAIXA | BRUNA |




## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01|  Não coletar dados pessoais 
|02|  Não irá gerar conteúdo próprio 
|03|  Postar conteúdo de vídeo tutorial e não incluir outros tipos
|04|  Postar vídeos em categorias específicas
|05|  Possuir linguagem simples e de fácil de entendimento
|06|  Conteúdo seja relevante para os usuários
|07|  Aplicação seja simples e intuitiva 

                   
