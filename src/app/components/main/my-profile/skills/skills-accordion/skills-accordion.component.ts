import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-accordion',
  templateUrl: './skills-accordion.component.html',
  styleUrls: ['./skills-accordion.component.scss']
})
export class SkillsAccordionComponent implements OnInit {
  @Input() title: any;
  @Input() text: any;
  expandedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
