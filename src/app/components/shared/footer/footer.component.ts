import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  date: number = new Date().getFullYear();
  isTablet: boolean = false;
  isMobile: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isTablet = window.innerWidth < 1000;
    this.isMobile = window.innerWidth < 768;
  }

}
