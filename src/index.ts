import FruitMachine from "./FruitMachine";
import Player from "./Player";

const fm = new FruitMachine(new Player("Usman"));

let runCount = 10;

while (runCount) {
  fm.run();
  runCount -= 1;
}
