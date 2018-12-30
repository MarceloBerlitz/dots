export class SidesModel {
  public top: boolean = false;
  public right: boolean = false;
  public bottom: boolean = false;
  public left: boolean = false;

  public equals(sides: SidesModel): boolean {
    return this.top == sides.top && this.right == sides.right && this.bottom == sides.bottom && this.left == sides.left;
  }
}
