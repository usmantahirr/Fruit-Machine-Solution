export default class Player {
  constructor(public id: string, public money = 50) {}

  checkBalance(cost: number) {
    if (this.money - cost > 0) {
      this.money -= cost;
      return true;
    }
    return false;
  }

  win(money: number) {
    this.money += money;
  }
}
