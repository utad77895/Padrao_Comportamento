import { IActivityService } from '../models/IActivityService';

// Abstração
export abstract class ActivityService {
    apiService: ActivityService;
    constructor(apiService: ActivityService) {
        this.apiService = apiService;
    }
}