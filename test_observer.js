import { CatModel } from "./models/CatModel";
import { ObservableController } from "./controllers/ObservableController";
import { CatView } from "./views/CatView";

function main() {
  var model = new CatModel();
  var controller = new ObservableController(model);
  var view = new CatView(controller);
}

main();