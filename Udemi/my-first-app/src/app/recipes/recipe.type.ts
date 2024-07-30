export class Recipe {
  public name: string;
  public description: string;
  public imgPath: string;

  constructor(name: string, desc: string) {
    this.name = name;
    this.description = desc;
  }
}
