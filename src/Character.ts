import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighte {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: this._archetype.energyType, amount: getRandomInt(1, 10) };
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return this._energy;
  }

  get name(): string {
    return this._name;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    this._lifePoints = damage > 0 ? this._lifePoints - damage : this._lifePoints - 1;
    this._lifePoints = this._lifePoints < 0 ? -1 : this._lifePoints;
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    const damage = this._strength;
    enemy.receiveDamage(damage);
  }

  levelUp(): void {
    const increment = this.getRandomInt(1, 10);

    this._maxLifePoints += increment;
    this._maxLifePoints = Math.min(this._maxLifePoints, this._race.maxLifePoints);

    this._strength += increment;
    this._defense += increment;
    this._dexterity += increment;

    this._energy.amount = 10;

    this._lifePoints = this._maxLifePoints;
  }
}