import { CatModel } from "./models/CatModel";
import { ObservableController } from "./controllers/ObservableController";
import { CatView } from "./views/CatView";

//ficheiro para testar o funcionamento do Observer,verifica se altera os elementos do DOM na página HTML
function main() {
  var model = new CatModel();
  var controller = new ObservableController(model);
  var view = new CatView(controller);
}

main();