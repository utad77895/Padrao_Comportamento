import { IActivityService } from '../models/IActivityService';
import { Activity } from '../models/Activity';
import { ActivityService } from './ActivityService';

// Abstração Refinada
export class ApService extends ActivityService {
    activeAP: Activity;

    constructor(apiService: IActivityService) {
        super(apiService);
    }
    //Imprime a Activity para a consola 
    //No entanto poderia estas a gravar diretamente na base de dados, para isso teria de importar o mongoose no entanto pretendo fazer refactoring do processo no final do projeto.
    addNewActivity(ap: Activity) {
        this.apiService.add(ap).then(data => {
            console.log('added Activity: ', data);
        }).catch(err => console.log(err));
    }

    //exemplo display Activity 
   /* displayActivity(id) {
        this.apiService.get>(id).then(ap => console.log('activity', ap));
    }

    async displayActivitys() {
        let activities = await this.apiService.getAll();
        console.log('Activities', activities);
    }*/
}