import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit {
  index = 0;
  isWorkOpen: boolean = true;

  constructor() {}

  ngOnInit(): void {}

}
