import Player from "./Player";
import Slot from "./Slot";

export default class FruitMachine {
  constructor(
    private player: Player,
    private slots: Slot[] = [],
    private money = 100,
    private cost = 5
  ) {
    this.slots.push(new Slot("apple"));
    this.slots.push(new Slot("bnana"));
    this.slots.push(new Slot("cherry"));
  }

  run() {
    if (this.player.checkBalance(this.cost)) {
      this.money += this.cost;
      this.slots.forEach((slot) => {
        slot.shuffle();
      });

      if (this.slots.every((slot) => slot.active === this.slots[0].active)) {
        console.log(`
      ----[ You won ${this.money}€ ]----
        `);
        this.player.win(this.money);
        this.money = 0;
      } else {
        this._print();
      }
    } else {
      console.log("Not Enough Balance");
    }
  }

  private _print() {
    console.log(`
      ${this.slots[0].active} | ${this.slots[1].active} | ${this.slots[2].active}}
      Money Available: ${this.money}€
      Player: ${this.player.id} - ${this.player.money}€
    `);
  }
}
