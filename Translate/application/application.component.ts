import { Component, OnInit } from '@angular/core';
import { TranslateService } from './translate';


@Component({
  moduleId: module.id,
  selector: 'owic-translate-sample',
  templateUrl: './application.compontent.html',
})
export class ApplicationComponent {

  public translatedText: string;
  public supportedLanguages: any[];

  constructor(private _translate: TranslateService) { }

  ngOnInit() {
    // standing data
    this.supportedLanguages = [
      { display: 'English', value: 'en' },
      { display: 'Nederlands', value: 'nl' },
    ];

    // set current langage
    this.selectLang('nl');
  }

  isCurrentLang(lang: string) {
    // check if the selected lang is current lang
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    // set current lang;
    this._translate.use(lang);
    this.refreshText();
  }

  refreshText() {
    // refresh translation when language change
    this.translatedText = this._translate.instant('hello world');
  }
}
