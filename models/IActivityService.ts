// Implementador
export interface IActivityService {
    get(param: number): T;
    getAll(): Promise;
    add(entity: T): Promise;
    // update(entity: T): Promise;
    // delete(entity: T): Promise;
}