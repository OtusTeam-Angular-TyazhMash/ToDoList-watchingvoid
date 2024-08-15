import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private translate: TranslateService, private location: Location, private router: Router) {
    const browserLang: string = this.translate.getBrowserLang() || 'en';
    this.translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.router.navigate([this.location.path()], { queryParams: { lang } });
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}
