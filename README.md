# Padrao_Comportamento
 O padrão Observer define uma dependência um-para-muitos entre objetos para que, quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente.

Sujeito/Subject - conhece os seus observadores. Qualquer número de objetos Observer pode observar um sujeito. Deve fornecer uma interface para anexar e desanexar objetos Observer.

Observador/Observer - define uma interface de atualização para objetos que devem ser notificados sobre mudanças de um determinado sujeito.

Sujeito Concreto/ConcreteSubject - armazena o estado dos objetos ConcreteObserver e Noifica os seus observadores quando seu estado muda.
Observador Concreto/ConcreteObserver - mantém uma referência a um objeto ConcreteSubject, armazena o estado que deve permanecer consistente com o do sujeito e implementa a interface de atualização do Observer para manter seu estado consistente com o do sujeito/Subject.

Neste meu projeto apliquei o padrão Observer na config View representada pela página configuracao-ativiade.html, tornando desta forma reactiva.
A simular o Subject temos a classe Observable.js localizada em  ./models/Observable.js
A representar o Observer/Observador a classe Observer,js localizada em .views/Observer.js
A representar o Sujeito Concreto/ConcreteSubject implementei a classe CatView.js localizada em .views/CatView.js, que notifica os observadores sobre a alteração de estado e seria importada para a página configuracao-atividade.html para efetivamente alterando o estado dos elementos do DOM.
A representar o Observador Concreto/ConcreteObserver implementei a classe ObservableController.js localizada em .controllers/ObservableController.js 

Escolhi a implementação deste padrão porque pretendia adicionar reactividade à página de configuração da atividade. No entanto uma vez que na implementação inicial estou a utilizar o Node.js e o express.js e por exemplo o Node.js já utiliza o padrão Observer com a classe EventEmitter que permite criar várias funções listeners para registar eventos. Achei por bem fazer uma implementação em javascript puro só para fins demonstrativos, deixando a implementação com Node.js para o refactoring do projecto.
Para mostrar a reactividade na página html configuracao-atividade.html, fiz uma implementação com métodos javascript para mostrar a reactividade no DOM da página, ou seja sempre que o estado da categoria for alterado por exemplo para "Turismo" essa alteração será subscrita por outros elementos da página. Neste caso será um elemento de span que adicionar a categoria "Turismo" no elemento textarea das questões. 

#Diagramas
Diagramas de componente e de sequência do componente encontram-se na pasta Diagramas do repositório.
