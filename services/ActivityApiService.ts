const fetch = require('node-fetch');
import { IActivityService } from '../models/IActivityService';

// Implementador Concreto
export class ActivityApiService implements IActivityService {
    constructor(
        protected _base: string
    ) { }

    get(activityId: number): T {
        return fetch(this._base + activityId).then(res => res.json());
    }

    getAll(): Promise {
        return fetch(this._base).then(res => res.json());
    }

    add(item: T): Promise {
        return fetch(this._base, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(res => res.json());
    }

    // update(entity: T): Promise {
    //   
    // }

    // delete(entity: T): Promise {
    //  
    // }
}