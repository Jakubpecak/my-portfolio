import { Component, EventEmitter, OnInit, Output, OnDestroy, Input } from '@angular/core';
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
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  isTablet: boolean = false;
  isMobile: boolean = false;
  color: ThemePalette = 'primary';
  checked = false;
  isPageNotFound: boolean = false;
  @Input() isEnglishLang!: boolean;
  @Output() languageChanged = new EventEmitter<string>();

  constructor(private darkModeService: DarkModeService, private myProfileService: MyProfileService) {}

  ngOnInit(): void {
    this.isTablet = window.innerWidth < 1024;
    this.isMobile = window.innerWidth < 768;

    this.myProfileService.pageNotFound.subscribe((value) => {
      this.isPageNotFound = value;
    });

    this.isDarkModeOn = JSON.parse(localStorage.getItem('dark-mode') as any).darkMode;
  }

  changeLanguage(language: string) {
    this.languageChanged.emit(language);
  }

  onToggle(): void {
    this.darkModeService.toggle();
  }
}