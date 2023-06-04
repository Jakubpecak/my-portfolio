import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() id: any;
  @Input() control: any;
  @Input() placeholder: any;
  @Input() type: any;
  @Input() label: any;
  @Input() appearance: any = 'fill';
  @Input() max: any;
  @Input() min: any;

  @Output() focusOut = new EventEmitter();

  @ViewChild('field') field: any;

  constructor() { }

  ngOnInit(): void {
  }
}
