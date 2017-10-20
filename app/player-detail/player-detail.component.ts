import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PlayerService } from '../player.service';
import { Player } from '../player/player';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  player: Player = new Player('','', -1);


  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private playerService:PlayerService
  ) { }

  ngOnInit() {
    // params est un objet de type Observable
    this.route.params.subscribe(param => {

      if (this.playerService.players.length > 0) {
        // le service contient déjà des joueurs
        this.player =
          this.playerService.players
            .filter(p => p.lastname == param.lastname)[0];
      } else {
        // les joueurs n'ont pas été chargés => requête ajax
        this.playerService.getPlayer(param.lastname)
          .map(data => data.json())
          .subscribe (data => {
            this.player = data;
          });
      }




    });

  }

}

// Afficher 1 seul joueur
