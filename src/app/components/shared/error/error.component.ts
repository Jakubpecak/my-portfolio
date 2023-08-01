import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  @Input() control: any;
  @Input() message: string = "Invalid value";

  constructor() { }

  ngOnInit(): void {
  }

}
