import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number, maxLifePoints = 99) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
    Elf._instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._instances;
  }
}