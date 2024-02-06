import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

type MonsterType = (SimpleFighter | Fighter)[];

export default class PVE extends Battle {
  private _player: Fighter;
  private _monsters: MonsterType;

  constructor(player: Fighter, monsters: MonsterType) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  override fight(): number {
    const aliveMonster = this._monsters.find((monster) => monster.lifePoints > 0);

    if (aliveMonster) {
      this._player.attack(aliveMonster);
    }

    this._monsters.forEach((monster) => {
      monster.attack(this._player);
    });

    return this._player.lifePoints <= 0 || !aliveMonster ? super.fight() : this.fight();
  }
}