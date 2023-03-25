# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas
 
1° - Rodrigo Alves tem 67 anos, casado, é um motorista recém-aposentado e atualmente trabalha com um estabelecimento próprio. Pretende expandir seu negocio com a ajuda da tecnologia, pois adora cozinhar e era seu sonho ter seu próprio bar. Está procurando por ajuda para aprender melhor sobre os aplicativos, já que possui dificuldades em aprender a usar a tecnologia ao seu favor, nem sempre pode contar com a ajuda dos filhos e dos netos para fazer alguma atividade que envolva o uso de aplicativos. Seu hobby é tocar violão. 

2° - Maria Silva tem 60 anos, casada, é uma professora aposentada e autônoma. Ajuda as crianças e adolescentes que possuem dificuldades em aprender sobre a história do Brasil, mostrando sempre boa vontade e transmitindo com clareza o seu conhecimento, pois é uma felicidade ajudar as pessoas. Está buscando uma maneira de aprender mais sobre a tecnologia, para poder criar vídeos sobre os conhecimentos no qual domina e montar um cronograma de estudos em seu canal para auxiliar os estudantes. Seu hobby é passar o tempo cuidando dos seus pets. 

3° - Lilia Gomes tem 59 anos, solteira, é uma enfermeira e trabalha em sua área. Pensa em aprimorar seus conhecimentos sobre os aplicativos, pois em seu trabalho estão implementando várias funções tecnologicas e também, além de simpatizar com o mundo tecnologico. Adora dialogar com seus pacientes, onde muitas das vezes não está por dentro das coisas quando falam sobre tecnologia, nisso ela está procurando uma maneira de se atualizar tanto no ambiente de trabalho, quanto em momentos de lazer. Seu hobby é tocar piano e dançar.  

4° - Paulo Mendes tem 26 anos, solteiro, é um estudante de programação e trabalha com edição de vídeos. Pretende montar uma startup com foco em desenvolvimento de jogos, pois depois de ter trabalhado com um amigo em um projeto de games, percebeu que era mesmo aquilo que queria trabalhar no dia a dia. Está buscando ajuda para entender melhor sobre o mercado de games, pois inicialmente seu objetivo é aperfeiçoar seu portfólio e entrar para a industria de jogos e só depois montar a sua startup. Gosta de enviar vídeos para o YouTube sobre como programar jogos mais antigos, onde não envolve tanto conhecimento profundo. Seu hobby é correr. 

5° - Christian Souza tem 35 anos, solteiro, é um programador e trabalha em sua área. Seu sonho futuramente é ser professor em uma universidade, pois em seu tempo livre, gosta de ajudar as pessoas a entender melhor sobre o mundo da tecnologia, sendo passando informações e dicas em suas redes sociais, quanto postando tutoriais no YouTube sobre diversos assuntos relacionados aos aplicativos. Em seu tempo livre, seu hobby é jogar. 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Rodrigo Alves |Precisa de auxílio para aprender a usar aplicativos com a ajuda da tecnologia.|Para expandir seu negocio, pois adora culinária e pretende ter seu próprio bar.  |
|Maria Silva  |Auxílio com a tecnologia para criar vídeos  |Para ajudar seus alunos transmitindo conhecimento e tendo um cronograma de estudos.|
|Lilia Gomes  |Aprimorar seus conhecimentos em aplicativos.|Para usar os aperfeiçoamentos que obtiver a seu favor no trabalho, além de ficar por dentro do mundo tecnológico. |
|Paulo Mendes |Precisa de ajuda para um entendimento melhor sobre o mercado de games e aperfeiçoamento em seu portfólio.  | Para entrar na indústria de jogos e abrir uma startup    |
|Christian Souza   | Quer postar tutorias de diversos assuntos relacionados a aplicativos   |Auxiliar pessoas através de vídeos.|



Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Cadastrar usuário nome e senha | ALTA | KARINE   |
|RF-002| Separar o conteúdo por categorias  | BAIXA |KARINE  |
|RF-003| Avaliar o conteúdo| BAIXA |KARINE  |
|RF-004| Ordenar os vídeos de acordo com a avaliação | BAIXA | KARINE  |
|RF-005| Postar o conteúdo | ALTA | KARINE  |
|RF-006| Validar o conteúdo postado antes de publicar | MÉDIA | KARINE  |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Aplicação Responsiva | ALTA | 
|RNF-002| Rodar nos principais browser: microsoft edge, firefox, google chrome, safari | MÉDIA | 
|RNF-003| Conseguir funcionar sem degradação no desempenho | ALTA | 
|RNF-004| Deve ser fácil de manter e atualizar | BAIXA |
|RNF-005| Deve ser confiável e atender aos requisitos do usuário | MÉDIA |
|RNF-006| Deve ser fácil de usar e entender                                | ALTA |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Não coletar dados pessoais                            |
|04| Não vai gerar conteúdo próprio                        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata. 

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
