import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListComponent } from './players/list/list.component';
import { PlayersModule } from './players/players.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, PlayersModule, RouterModule.forRoot([
      { path: 'players', component: ListComponent }
    ])
  ],
  providers: [],
  bootstrap: [ListComponent]
})
export class AppModule { }
