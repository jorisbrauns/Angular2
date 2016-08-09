"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var translate_1 = require('./translate');
var ApplicationComponent = (function () {
    function ApplicationComponent(_translate) {
        this._translate = _translate;
    }
    ApplicationComponent.prototype.ngOnInit = function () {
        // standing data
        this.supportedLanguages = [
            { display: 'English', value: 'en' },
            { display: 'Nederlands', value: 'nl' },
        ];
        // set current langage
        this.selectLang('nl');
    };
    ApplicationComponent.prototype.isCurrentLang = function (lang) {
        // check if the selected lang is current lang
        return lang === this._translate.currentLang;
    };
    ApplicationComponent.prototype.selectLang = function (lang) {
        // set current lang;
        this._translate.use(lang);
        this.refreshText();
    };
    ApplicationComponent.prototype.refreshText = function () {
        // refresh translation when language change
        this.translatedText = this._translate.instant('hello world');
    };
    ApplicationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'owic-translate-sample',
            templateUrl: './application.compontent.html',
        }), 
        __metadata('design:paramtypes', [translate_1.TranslateService])
    ], ApplicationComponent);
    return ApplicationComponent;
}());
exports.ApplicationComponent = ApplicationComponent;
//# sourceMappingURL=application.component.js.map