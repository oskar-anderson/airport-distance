import { autoinject, PLATFORM } from "aurelia-framework";
import { RouterConfiguration, Router } from 'aurelia-router'


@autoinject
export class App {
  router?: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Airport';
    config.options.pushState = true; // use / paths vs hashrouter # paths

    config.map([
      { route: ['', 'home', 'home/index'], name: 'home', moduleId: PLATFORM.moduleName('views/home/index'), nav: true, title: "Calculate distance" },
      { route: ['unknown'], name: 'unknown', moduleId: PLATFORM.moduleName('views/unknown/index'), nav: false },
      { route: ['/test/checkbox-events'], name: 'checkbox-events', moduleId: PLATFORM.moduleName('views/test/checkbox-events/checkbox-events'), nav: true },
      { route: ['/test/array-updating'], name: 'array-updating', moduleId: PLATFORM.moduleName('views/test/array-updating/array-updating'), nav: true },
      { route: ['/test/tooltip'], name: 'tooltip', moduleId: PLATFORM.moduleName('views/test/tooltip/tooltip'), nav: true },
      { route: ['/test/binding'], name: 'binding', moduleId: PLATFORM.moduleName('views/test/binding/binding'), nav: true },
    ]);
    config.mapUnknownRoutes(PLATFORM.moduleName('views/unknown/index'));
  }
}
