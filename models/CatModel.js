import Observable from "../models/observable";

class CatModel extends Observable {
   constructor() {
     super();
     this.cat0 = "Escolha a opção:";
     this.cat1 = "Turismo";
     this.cat2 = "Sustentabilidade";
     this.cat3 = "Pegada de Carbono";
     this.cat4 = "Outras";

   }
}

export { CatModel };