
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide, PLATFORM_PIPES } from '@angular/core';
import { ApplicationComponent } from './application.component';
import { TRANSLATION_PROVIDERS, TranslateService, TranslatePipe } from './translate';

bootstrap(ApplicationComponent, [
    TRANSLATION_PROVIDERS, // inject our translations
    TranslateService, //inject our services
    provide(PLATFORM_PIPES, { useValue: [TranslatePipe], multi: true }) // application wide pipe
]);