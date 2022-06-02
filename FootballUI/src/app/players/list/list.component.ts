import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  players: Player[] = [];

  constructor(public playerService: PlayersService, private router: Router) { }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe(
      (data: Player[]) => {
        this.players = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  deletePlayer(id: any) {
    this.playerService.deletePlayer(id).subscribe(
      res => {
        this.players = this.players.filter(item => item.id !== id);
      }
    );
  }
}
