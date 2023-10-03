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
    ]);
    config.mapUnknownRoutes(PLATFORM.moduleName('views/unknown/index'));
  }
}
