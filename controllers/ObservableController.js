class ObservableController {
    constructor(model) {
      this.model = model;
    }
 
    //Interface do evento
    handleEvent(e) {
      e.stopPropagation();
      switch (e.type) {
        case "change":
          this.clickHandler(e.target);
          break;
        default:
          console.log(e.target);
      }
    }
 
    get modelHeading() {
      return this.model.cat;
    }
 
    //Altera a categoria
    //Falta fazer a validação de mais categorias para que a permuta possa ser feita na view html
    changeHandler(target) {
      this.model.cat0 = "Turismo";
      this.model.notify(this.model);
    }
 }
 
 export { ObservableController };
