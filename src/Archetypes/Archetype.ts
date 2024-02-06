import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;
  private static _instances = 0;
  constructor(name: string) {
    this._special = 0;
    this._name = name;
    this._cost = 0;
    Archetype._instances += 1;
  }

  get special(): number {
    return this._special;
  }

  get name(): string {
    return this._name;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }
  
  abstract get energyType(): EnergyType;
}