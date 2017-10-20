import { Component } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayerService]
})
export class AppComponent {
  title = 'L\'équipe';
  message = 'Ceci est un message';
  private message2:string; //type primitive string
  nb:number = 0;
  isMember:boolean = false;

  test() {
    this.message = 'autre message';
    this.message2 = this.getMessage();
  }

  compteur() {
    if (this.isMember) {
      this.nb = this.nb + 1;
    } else {
      this.nb = this.nb + 2;
    }

    // exo
    if (this.nb >= 5) this.nb = 0;
  }

  getMessage():string {
    return this.message;
  }
}
