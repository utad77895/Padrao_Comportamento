import Observer from "../views/Observer";
//falta implementar para os restantes elementos do formulário do ficheiro configuracao-atividade.html exemplo ilustrativo
//Esta implemntação deverá alterar os elementos do DOM que subscreveram o evento change da lista de categorias
class CatView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.cat = document.getElementById("cat_id");
    this.cat.innerText = controller.model.cat;
    this.cat.addEventListener("change", controller);
    this.controller.model.addObserver(this);
  }

  update(model) {
    this.cat.innerText = model.cat;
  }
}

export { CatView };
