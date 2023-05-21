import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  leftWrapTitle: string = 'Frontend developer';
  leftWrapText: string = 'Test111';

  rightWrapTitle: string = 'Courses and others';
  rightWrapText: string = 'Test222';

  constructor() { }

  ngOnInit(): void {
  }

}
