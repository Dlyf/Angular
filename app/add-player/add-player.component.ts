import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player} from '../player/player';
import { range } from '../lib/utils';

@Component({
  selector: 'add-player',
  templateUrl: './add-player.component.html'
})
export class AddPlayerComponent implements OnInit {

  @Input() c1:string;
  @Input() c2:string;

  // <T> classe générique
  @Output() myEvent = new EventEmitter<Player>();

  newPlayer:Player = new Player('','',-1);

  number_list:number[];

  private clearPlayerForm() {
    this.newPlayer = new Player('','',-1);
  }

  savePlayer() {
    let p:Player = new Player(
      this.newPlayer.firstname,
      this.newPlayer.lastname,
      this.newPlayer.num,
      this.newPlayer.team,
      this.newPlayer.photo
    );

    // on notifie le parent de l'événement
    // déclenché côté enfant
    this.myEvent.emit(p);
    this.clearPlayerForm();

  }

  ngOnInit() {
    this.number_list = range(0,99);
  }

}
