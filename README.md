# Padrao_Estrutura
 O padrão Bridge desacopla uma abstração da sua implementação para que as duas possam funcionar independentemente.

Abstração (interface) é uma camada de controle de alto nível para alguma entidade e delega o trabalho para a camada de implementação (plataforma). A Abstração contém uma referência à Implementação por meio de uma propriedade na classe.

Cliente – ​​solicita uma operação chamando a interface Abstração
Abstração – declara uma interface para abstração de primeiro nível e mantém uma referência ao Implementador
Abstração refinada – implementa e estende a interface definida por Abstração
Implementador – abstração do implementador de primeiro nível
Implementador Concreto – implementa a interface Implementador

Neste exemplo como exemplo de config View temos a configuracao-ativiade.html
A simular o cliente do Padrão para criar a atividade temos o bridge.ts
A Abstração é representada pela classe ActivityService.ts localizada em ./services/ActivityService.ts
A Abstração Refinada é representada pela classe ApService.ts localizada em ./services/ApService.ts
O Implementador está representado pela classe IActivityService.ts localizada em ./models/IActivityService.ts
O Implementador Concreto está representado pela classe ActivityApiService.ts localizada em ./services/ActivityApiService.ts

Escolhi a implementação deste padrão porque a sua implementação funciona na criação da atividade. No entanto uma vez que na implementação inicial estou a utilizar o Node.js e o Express.js e este último por exemplo já implementa alguns padrões de estrutura como por exemplo o Proxy(muito utilizado para fazer verificação de autenticação de utilizadores com um Midleware). Será necessário um refactoring para que fique totalmente funcional não só utilizando o typescrypt mas com a framework Express.js.

#Diagramas
Diagramas de componente e de sequência do AP encontram-se na pasta Diagramas do repositório.
