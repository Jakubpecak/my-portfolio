import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  language!: string;
  isEnglishLang!: boolean;
  constructor(private translate: TranslateService, private languageService: LanguageService) {}
  
  ngOnInit(): void {
    this.setDefaultLanguage();
  }

  setDefaultLanguage() {
    this.language = this.languageService.getLanguage();
    if (this.language === 'en') {
      this.translate.use('en');
      this.isEnglishLang = true;
    } else if (this.language === 'pl') {
      this.translate.use('pl');
      this.isEnglishLang = false;
    } else {
      this.translate.use('en');
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.languageService.setStorage(language);
  }
}
