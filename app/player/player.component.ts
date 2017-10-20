import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player} from './player';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player:Player;
  @Output() deleteEvent = new EventEmitter<Player>();

  deletePlayer() {
    this.deleteEvent.emit(this.player);
  }

  ngOnInit() {}
}
