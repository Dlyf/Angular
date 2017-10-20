import { Component, OnInit } from '@angular/core';
import { Player} from '../player/player';
import { PlayerService } from '../player.service';
import 'rxjs/add/operator/delay'; //opérator mis à la disposition de la librairie

@Component({
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  // player1:Player = new Player('Michel', 'Platini', 10, 'Juventus', 'http://www.juventus.com/media/images/news-images/personaggi-storici/frosinone%20juventus%20del%20piero.jpg');
  // player2:Player = new Player('Pavel', 'Nedved', 6, '', 'https://static.foba1.com/bilder/spieler/gross/2578.jpg');
  // player3:Player = new Player('Thomas', 'Meunier', 4, 'PSG', 'http://www.letelegramme.fr/images/2015/08/19/jean-francois-pincemin-le-meunier-du-moulin-des-iles_2497490.jpg');
  players:Player[] = [];
  playersLoaded:boolean = false;
  message:string = "";

  constructor(private playerService:PlayerService){};

  addPlayer(player: Player) {
    if (!player.photo) {
      player.photo = 'http://localhost:5000/img/avatar.png';
    }

    if (player.num != -1) {
      // un numéro a été sélectionné
      this.playerService.addPlayer(player)
        // réponse du serveur d'un message
        .map(data => data.json())
        .subscribe(data => {
          if(data.msg == "ok") {
            this.players.push(player);
            this.message = "Joueur ajouté avec succès";
          } else {
            this.message = "Impossible d'enregistrer le joueur";
          }
        });

        this.players.push(player);
        this.message = "Joueur ajouté avec succès";
      } else {
        this.message = "Impossible d'enregistrer le joueur";
      } 



  }

  deletePlayer(player: Player) {
    //let i:number = -1;

    //.forEach(function(p, index) {}) ES5http://localhost:4200/

    // this.players.forEach((p, index) => {
    //   let cond1:boolean = p.lastname == player.lastname;
    //   let cond2:boolean = p.firstname == player.firstname;
    //   if (cond1 && cond2) i = index;
    // });

    // si le joueur a été trouvé dans le tabhttp://localhost:4200/leau on le retire
    //if (i != -1) this.players.splice(i,1);

    let playersFiltered:Player[] =
      this.players.filter(p => {return player.lastname != p.lastname});

    // mise à jour du tableau players
    this.players = playersFiltered;

  }

  ngOnInit() {
    this.playerService.getPlayers()
      .delay(1000)
      .subscribe((players:Player[]) => {
        this.players = players; // assigner les joueurs à une propriété du composant
        this.playerService.players = players; // ... à une propriété du service
        this.playersLoaded = true; //player list component html
    });

      // this.players = this.playerService.getPlayers2();

  }

}
