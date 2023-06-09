import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @ViewChild('nav', {read: DragScrollComponent}) ds!: DragScrollComponent;


  constructor() {}

  ngOnInit(): void {
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  moveTo(index: number) {
    this.ds.moveTo(index);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.ds.moveTo(3);
    }, 0);
  }
}
