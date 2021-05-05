Esse é um projeto para o conteúdo sobre Redux com react.

Antes de iniciar Crie um fork desse projeto e para isso siga esse tutorial de como realizar um fork.

Após feito o fork, clone o repositório criado para o seu computador.

Rode o npm install.

Cada branch dessas será um exercício. Mude para a branch exercise-one com o comando git checkout exercise-one. É nessa branch que você realizará a solução para o exercício 1, e assim por diante. Observe o que deve ser feito nas instruções para cada exercício.

COMEÇANDO OS EXERCÍCIOS Dica: Use o Redux Devtools para ver o estado da sua aplicação em seu navegador.

Antes de começar vá para a branch main e veja a aplicaçao funcionando, nessa branch so foi utilizado estados locais e as informações são passadas por meio de props. Repare que a arvore Dom possui ramos diferentes por isso em alguns casos é necessario criar estados no componente pai(App) e criar funções que alterem esses estados que seram passadas para componentes filhos e netos para que estes possam alterar os estado do componente pai e este estado possa ser passado para outro componente em outro ramos da arvore.

Essa estrutura é bastante confusa e dificil de gerenciar, mude para a branch exercise-one e vamos ver como essa aplicação fica usando o redux

A store, os reducers e as actions ja estão disponíveis voce deverá usar mapStateToprops e mapDispatchToProps para pegar e enviar dados para a store.

Exercício 1

Vá para a branch exercise-one e rode a aplicação, ela não funcionrá pois os estados não estão sendo passdo via props, use mapStateToProps para acessar os estados da aplicação e resgatar os estados necessarios para fazer cada componente funcionar

Exercício 2

Nesse exercicio você tera um desafio maior, vá para a branch exercise-two, essa branch recebe os estados nos lugares corretos não envia informações para a store, use mapDispatchToProps para enviar dados para a storee fazer a aplicação funcionar

Utilize Redux para armazenar todo o estado da aplicação. Apos terminar o exercicio compara o resultado final com o da branch main que não faz uso do Redux.
