import { MyProfileService } from 'src/app/services/my-profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  isEngLang: boolean = true;

  constructor(private myProfileService: MyProfileService) { }

  ngOnInit(): void {}

}
