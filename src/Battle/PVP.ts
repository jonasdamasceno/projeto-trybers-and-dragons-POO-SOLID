import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private player1: Fighter;
  private player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);

    this.player1 = player1;
    this.player2 = player2;
  }

  override fight(): number {
    this.player1.attack(this.player2);
    this.player2.attack(this.player1);

    return this.player1.lifePoints <= 0 || this.player2.lifePoints <= 0
      ? super.fight() : this.fight();
  }
}