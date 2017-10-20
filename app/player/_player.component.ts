import { Component, OnInit } from '@angular/core';
import { Player} from './player';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {


  defaultColor:string = "red";
  selectColor:string = "blue";
  t:string = "Simple texte";
  //t2:string = "";
  cb:boolean = false; // case décochée par défaut

  //EXO tableau de couleurs
  couleurs:string[] = [
    'red',
    'blue',
    'green',
    'yellow',
    'brown',
    '#9633FF',
    '#55CC3',
    '#000000',
    '#78CFD2',
    '#CCCCCC',
  ];

  // [c1]="saisie(e) {
  //   this.t += e.key;
  // }

  test(e) {
    console.log(e);
  }

  addPlayer(player: Player) {
    // ajoute au tableau des joueurs le joueur
    // transmis par le composant enfant add-player
    //this.players.push(player);
  }

  ngOnInit() {}
}
