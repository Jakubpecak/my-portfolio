import { Component, OnInit } from '@angular/core';
import { MyProfileService } from 'src/app/services/my-profile.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  date: number = new Date().getFullYear();
  isTablet: boolean = false;
  isMobile: boolean = false;
  isPageNotFound: boolean = false;

  constructor(private myProfileService: MyProfileService) { }

  ngOnInit(): void {
    this.isTablet = window.innerWidth < 1000;
    this.isMobile = window.innerWidth < 768;

    this.myProfileService.pageNotFound.subscribe((value) => {
      this.isPageNotFound = value;
    });
  }
}
