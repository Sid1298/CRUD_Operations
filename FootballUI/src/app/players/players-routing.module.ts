import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'players', redirectTo: 'players/list', pathMatch: 'full' },
  { path: 'players/list', component: ListComponent },
  { path: 'players/:playerId/details', component: DetailsComponent },
  { path: 'players/create', component: CreateComponent },
  { path: 'players/:playerId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
