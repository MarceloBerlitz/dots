import { SidesChangeModel } from '../model/sides-change.model';
import { SidesModel } from '../model/sides.model';

export class SidesChangeBuilder {

  constructor() {
    this.instance = new SidesChangeModel();
  }

  private readonly instance: SidesChangeModel;

  public static get(): SidesChangeBuilder {
    return new SidesChangeBuilder();
  }

  public rowIndex(i: number): SidesChangeBuilder {
    this.instance.rowIndex = i;
    return this;
  }

  public celIndex(i: number): SidesChangeBuilder {
    this.instance.celIndex = i;
    return this;
  }

  public sides(sides: SidesModel): SidesChangeBuilder {
    this.instance.sides = sides;
    return this;
  }

  public build(): SidesChangeModel {
    return this.instance;
  }

}
