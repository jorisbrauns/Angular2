"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var application_component_1 = require('./application.component');
var translate_1 = require('./translate');
platform_browser_dynamic_1.bootstrap(application_component_1.ApplicationComponent, [
    translate_1.TRANSLATION_PROVIDERS,
    translate_1.TranslateService,
    core_1.provide(core_1.PLATFORM_PIPES, { useValue: [translate_1.TranslatePipe], multi: true }) // application wide pipe
]);
//# sourceMappingURL=main.js.map