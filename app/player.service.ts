import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Player } from './player/player';

const urlServer = 'http://localhost:5000/players';

@Injectable()
export class PlayerService {
  players:Player[] = [];

  constructor(private http:Http) { }

  // getPlayers doit renvoyer des Observables auxquels souscrira la composant
  getPlayers():Observable<Player[]> {
    return this.http.get(urlServer)
      .map((res:Response) => res.json());
  }
  //renvoie directement la liste des joueurs. Problème d'asynchroni
  // version à bannir => getPlayers2() renvoie un tableau vide
  // car le retour de fonction est exécuté avec le retour de la
  // requête ajax
  getPlayers2():Player[] {
    this.http.get(urlServer)
      .map((res:Response) => res.json())
      .subscribe (data => {
        this.players = data;
      });

    return this.players;
  }

  getPlayer(lastname:string):Observable<any> {
    return this.http.get(`${urlServer}/${lastname}`);


  }

  addPlayer(player:Player):Observable<any> {
    let bodyString = JSON.stringify(player);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this.http.post(urlServer, bodyString, options);

  }



}
