import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

const appRoutes:Routes = [
  {path: 'contact', component: ContactComponent},
  {path: '', component: PlayerListComponent},
  {path: 'players', component: PlayerListComponent},
  {path: 'players/:lastname', component: PlayerDetailComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    AddPlayerComponent,
    PlayerListComponent,
    HeaderComponent,
    ContactComponent,
    PlayerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
