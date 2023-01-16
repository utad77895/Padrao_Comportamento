import Observer from "../views/Observerobserver";

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
