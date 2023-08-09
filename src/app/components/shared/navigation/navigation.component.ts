import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

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

  @Output() changeLangtoEn = new EventEmitter<void>();
  @Output() changeLangtoPl = new EventEmitter<void>();

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    this.isTablet = window.innerWidth < 1024;
  }

  changeToEnglish() {
    this.changeLangtoEn.emit();
  }

  changeToPolish() {
    this.changeLangtoPl.emit();
  }

  onToggle(): void {
    this.darkModeService.toggle();
  }
}
