export class Player {
  private id:number;
  public firstname:string;
  public lastname:string;
  public num:number;
  public team:string;
  public photo:string;

  constructor(
    firstname:string,
    lastname:string,
    num:number,
    team?:string,
    photo?:string
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.num = num;

    // l'argument team est facultatif (?), s'il est fournit au constructeur
    // on hydrate la propriété this.team
    if (team) this.team = team;
    if (photo) this.photo = photo;
  }
}
