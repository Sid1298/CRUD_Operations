import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from '../players.service';
import { Position } from '../position';
import { PositionService } from '../position.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  positions: Position[] = [];
  createForm: FormGroup;

  constructor(
    public playersService: PlayersService,
    public positionService: PositionService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.createForm = formBuilder.group({
      shirtNo: ['', Validators.required],
      name: ['', Validators.required],
      positionId: [''],
      appearances: [''],
      goals: ['']
    });
  }

  ngOnInit(): void {
    this.positionService.getPositions().subscribe(
      (data: Position[]) => {
        this.positions = data;
      }
    );
  }

  onSubmit(formData: any) : void {
    this.playersService.createPlayer(formData.value).subscribe(
      res => {
        this.router.navigateByUrl('players/list');
      }
    );
  }
}
