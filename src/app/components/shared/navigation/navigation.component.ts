import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isSticky: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (window.scrollY > 0) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }

}
