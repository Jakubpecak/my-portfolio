import { Component, OnDestroy, OnInit } from '@angular/core';
import { MyProfileService } from 'src/app/services/my-profile.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {

  constructor(private myProfileService: MyProfileService) { }

  ngOnInit(): void {
    this.myProfileService.pageNotFound.next(true);
  }

  ngOnDestroy(): void {
    this.myProfileService.pageNotFound.next(false);
  }

}
