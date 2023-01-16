import { Activity } from './models/Activity';
import { ActivityApiService } from './services/ActivityApiService';
import { ActivityService } from './services/ActivityService';

// Cliente
const url = 'https://arquitectura-url1.herokuapp.com/deploy-atividade';
const apiService = new ActivityApiService(url);
const activityService = new ActivityService(apiService);

//Ideia será receber como parametros da View configuracao-atividade.html os campos necessários para o construtor de forma criar a Atividade
activityService.addNewActivity({ activityId: 2,  InviraRAStID: 221, categorias: 'example',questoes:['questao 1','questao 2','questao 3','questao 4','questao 5'],questoescert:['questao 1'],
questoeserr:['questao 2','questao 3','questao 4','questao 5'],questoesfeed:['Exemplo feedback1','Exemplo feedback 2','Exemplo feedback 3'] } as Activity);

//Padrão Bridge
/*O padrão Bridge desacopla uma abstração da sua implementação para que as duas possam funcionar independentemente.

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
*/