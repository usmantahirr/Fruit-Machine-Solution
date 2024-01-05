import { getRandomIntInclusive } from "./utils";

type Fruit = "bnana" | "apple" | "cherry";

const fruits: Fruit[] = ["apple", "bnana", "cherry"];

export default class Slot {
  constructor(public active: Fruit = "bnana") {}

  shuffle() {
    this.active = fruits[getRandomIntInclusive(0, fruits.length - 1)];
  }
}
