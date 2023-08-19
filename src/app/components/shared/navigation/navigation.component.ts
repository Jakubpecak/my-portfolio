import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';
import {ThemePalette} from '@angular/material/core';
import { MyProfileService } from 'src/app/services/my-profile.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isSticky: boolean = false;
  isDarkModeOn: boolean = false;
  isEnglishLang: boolean = true;
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  isTablet: boolean = false;
  isMobile: boolean = false;
  color: ThemePalette = 'primary';
  checked = false;
  isPageNotFound: boolean = false;

  @Output() changeLangtoEn = new EventEmitter<void>();
  @Output() changeLangtoPl = new EventEmitter<void>();

  constructor(private darkModeService: DarkModeService, private myProfileService: MyProfileService) {
    this.darkModeService.disable();
  }

  ngOnInit(): void {
    this.isTablet = window.innerWidth < 1024;
    this.isMobile = window.innerWidth < 768;

    this.myProfileService.pageNotFound.subscribe((value) => {
      this.isPageNotFound = value;
    });
  }

  changeToEnglish() {
    this.changeLangtoEn.emit();
    this.myProfileService.isEngLang.next(true);
  }

  changeToPolish() {
    this.changeLangtoPl.emit();
    this.myProfileService.isEngLang.next(false);
  }

  onToggle(): void {
    this.darkModeService.toggle();
    this.isDarkModeOn = !this.isDarkModeOn;
  }
}