import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../player';
import { PlayersService } from '../players.service';
import { Position } from '../position';
import { PositionService } from '../position.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id?: number;
  player?: Player;
  positions: Position[] = [];
  editForm: FormGroup;
  
  constructor(
    public playersService: PlayersService,
    public positionService: PositionService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.editForm = formBuilder.group({
      id: [''],
      shirtNo: ['', Validators.required],
      name: ['', Validators.required],
      positionId: [''],
      appearances: [''],
      goals: ['']
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['playerId'];
 
    this.positionService.getPositions().subscribe((data: Position[]) => {
      this.positions = data;
    });

    this.playersService.getPlayer(this.id).subscribe((data: Player) => {
      this.player = data;
      this.editForm.patchValue(data);
    });
  }

  onSubmit(formData: any) {
    this.playersService.updatePlayer(this.id, formData.value).subscribe(res => {
      this.router.navigateByUrl('players/list');
    });
  }
}
