//modelo dos campos que serão persistidos na Base dados. Campos esses recolhidos na View de configuração da atividade.
export interface Activity {
    activityId: number;
    InviraRAStID:number;
    categorias: string;
    questoes: string[];
    questoescert: string[];
    questoeserr: string[];
    questoesfeed: string[];
}